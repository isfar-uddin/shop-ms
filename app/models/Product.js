const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Product Schema
const ProductSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    name: {
        type: String,
        required: true
    },
    category : {
        type: Number,
        required: true, 
    },
    quantity: {
        type: Number,
        required: true,
    },
})

module.exports = Product = mongoose.model("product", ProductSchema)