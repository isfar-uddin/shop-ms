const express = require('express');

const router = express.Router();
const keys = require('../config/db.config');

//Load Product Controller
const productController = require('../controllers/product.controller');

// @route GET /products
// @desc Get Products
// @access Private
router.get("/", productController.getAllProduct);

// @route POST /products
// @desc POST Products
// @access Private
router.post("/", productController.addProduct);

// @route GET /products/:id
// @desc GET Products details
// @access Private
router.get("/:id", productController.productDetails);

// @route PUT /products/:id
// @desc PUT Products Update
// @access Private
router.put("/:id", productController.updateProduct);

// @route Delete /products/:id
// @desc Delete Products
// @access Private
router.delete("/:id", productController.deleteProduct);


module.exports = router;