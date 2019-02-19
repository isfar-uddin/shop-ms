const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Connect database
const Connect = require('./app/config/db.connect');

//Load Product Route
const Products = require('./app/routes/product.route');

//Load Category Route
const Category = require('./app/routes/category.route');

//Load Brand Route
const Brand = require('./app/routes/brand.route');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Use Product Routes
app.use("/products", Products);

//Use Category Routes
app.use("/categories", Category);

//Use Brand Routes
app.use("/brands", Brand);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
