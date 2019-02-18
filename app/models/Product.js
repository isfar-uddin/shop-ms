const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Product Schema
const ProductSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    Name: {
        type: String,
        required: true
    },
    Category : {
        type: Number,
        required: true, 
    },
    Quantity: {
        type: Number,
        required: true,
    },
    Brand: {
        type: String,
        required: true,
    },
    Model: {
        type: String,
        required: true,
    },
    Year: {
        type: Date,
        required: true,
    },
    ProductCode: {
        type: String,
    },
    BarCode: {
        type: String,
    },
    SalePrice: {
        type: Number,
    },
    DealerPrice: {
        type: Number,
    },
    CostPrice: {
        type: Number,
    },
    Type: {
        type: Number,
    },
    Color: {
        type: String,
    },
    MinimumStockToNotify: {
        type: String,
    },
    StartingInventory: {
        type: String,
    },
    Purchased: {
        type: String,
    },
    Sold: {
        type: String,
    },
    OnHand: {
        type: String,
    },
    IsActive: {
        type: Number,
    },
    IsRawProduct: {
        type: Number,
    },
})

module.exports = Product = mongoose.model("Product", ProductSchema)