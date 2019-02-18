const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Product Schema
const GroupSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    Name: {
        type: String,
        required: true
    },
})

module.exports = Product = mongoose.model("Group", GroupSchema)