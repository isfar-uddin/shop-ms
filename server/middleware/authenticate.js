const jwt = require('jsonwebtoken');
const {secretOrKey} = require('./../config/db.config');

module.exports = (req,res,next) => {
    let token= req.headers['x-access-token'];
    if (!token) return res.status(401).send({ message: 'No token provided.' });
    jwt.verify(token,secretOrKey,(err,decoded_user) => {
        if(err) return res.status(500).json({message:"Failed to authenticate token."});
        req.userID = decoded_user.id;
        next();
    })
};