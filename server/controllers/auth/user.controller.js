const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./../../models/auth/user.model');
const {secretOrKey} = require('./../../config/db.config');


const register = (req,res) => {
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
                return jwt.sign({id:result._id},secretOrKey,{expiresIn:86400});
            }).then((token)=>{
                return res.status(200).json({token:token});
            }).catch(error => {
                res.status(500).json({error:error});
            });
        }
    });
};

const login = (req,res) => {
    User.findOne({email:req.body.email}, (err,user) => {
        if(err) return res.status(500).json("Error in the server");
        if(!user) return res.status(404).json("No user found");
        let isValidPassword = bcrypt.compareSync(req.body.password,user.password);
        if(!isValidPassword) return res.status(401).json({token:null});
        let token = jwt.sign({id:user._id},secretOrKey,{expiresIn:86400});

        res.status(200).json({token:token});
    });
};

const getCurrentUser = (req,res) => {
    let token= req.headers['x-access-token'];
    if (!token) return res.status(401).send({ message: 'No token provided.' });
    jwt.verify(token,secretOrKey,(err,decoded_user) => {
        if(err) return res.status(500).json({message:"Failed to authenticate token."});
        User.findById(decoded_user.id,{password: 0}, (err,user) => {
            if(err) return res.status(500).json("There was a problem funding the user");
            if(!user) return res.status(404).json("User not found");
            res.status(200).json(user);
        });
    })
};

module.exports = {
    register:register,
    login:login,
    getCurrentUser:getCurrentUser
};