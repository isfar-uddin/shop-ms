const express = require('express');

const router = express.Router();
const keys = require('../../config/keys');

//Load Product Controller
const productController = require('../../controllers/product'); 

// @route GET api/products
// @desc Get Products
// @access Private
router.get("/", productController.getAllProduct);

// @route POST api/products
// @desc POST Products
// @access Private
router.post("/", productController.addProduct);

// @route GET api/products/:id
// @desc GET Products details
// @access Private
router.get("/:id", productController.productDetails);

// @route PUT api/products/:id
// @desc PUT Products Update
// @access Private
router.put("/:id", productController.updateProduct);

// @route Delete api/products/:id
// @desc Delete Products
// @access Private
router.delete("/:id", productController.deleteProduct);


module.exports = router;