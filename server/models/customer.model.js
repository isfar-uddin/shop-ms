const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    MembershipCardNo: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true,
    },
    Phone: {
        type: String,
        unique: true,
        required: true
    },
    Email : {
        type: String,
        unique: true,
        required: true
    },
    NationalId: {
        type: Number,
        unique: true,
        required: true
    },
    Occupation: {
        type: String,
        required: true
    },
    Company: {
        type: String
    },
    Remarks: {
        type: String
    },
    IsActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Customer", CustomerSchema)