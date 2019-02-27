const bcrypt = require('bcrypt');
const User = require('./../../models/auth/user.model');


const signup = (req,res) => {
    bcrypt.hash(req.body.password,10, (err,hash) => {
        if(err) {
            return res.status(500).json({
                error:err
            });
        }else{
            const user = new User({
                user_name:req.body.user_name,
                email: req.body.email,
                password:hash,
            });

            user.save().then((result) => {
                return {
                    id:result._id,
                    user_name:result.user_name,
                    email:result.email,
                    token:user.generateAuthToken()
                };
            }).then((results)=>{
                return res.status(200).json(results);
            }).catch(error => {
                res.status(500).json({error:error});
            });
        }
    });
};

module.exports = {
    signup:signup
};