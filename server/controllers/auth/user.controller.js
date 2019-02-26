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
                let token = user.generateAuthToken();
                if(token.error) return {error:token.error};
                return {
                    result:result,
                    token:user.generateAuthToken()
                };
            }).then((result)=>{
                if(result.error) return res.status(500).json({error:"Unable to create token"});
                return res.status(200).json(result);
            }).catch(error => {
                res.status(500).json({error:error});
            });
        }
    });
};

module.exports = {
    signup:signup
};