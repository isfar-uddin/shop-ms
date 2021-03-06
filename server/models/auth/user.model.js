const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const {secretOrKey} = require('./../../config/db.config');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type: String,
        unique:true,
        required: [true,'Emails is required'],
        validate:{
            validator: (v) => {
                return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
        },
        trim:true
    },
    user_name:{
        type: String,
        unique: true,
        required: [true, 'User name is required'],
        trim: true
    },
    password:{
        type:String,
        minlength: 6,
        required:[true, 'Password is required'],
    }
});

UserSchema.methods.generateAuthToken = () => {
    let user = this;
    console.log("User id:", user);
    return jwt.sign({id:user._id},secretOrKey,{expiresIn:86400});
};

module.exports = mongoose.model('User',UserSchema);