const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type: String,
        unique:true,
        required: [true,'Email is required'],
        validate:{
            validator: (v) => {
                return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
        },
        trim:true
    },
    userName:{
        type: String,
        unique: true,
        required: [true, 'Password is required'],
        trim: true
    },
    password:{
        type:String,
        minlength: 6,
        required:[true, 'Password is required'],
    }
});

module.exports = mongoose.model('User',UserSchema);