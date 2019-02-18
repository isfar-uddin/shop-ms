const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Product Schema
const CategorySchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    GroupName: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    }
})

module.exports = Category = mongoose.model("Category", CategorySchema)