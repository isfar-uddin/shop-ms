const express = require("express");

const router = express.Router();


const customerController = require('../controllers/customer.controller');

// @route GET /customers
// @desc Get customers
// @access Private
router.get("/", customerController.getAllCustomer);

// @route POST /customer
// @desc Create customer
// @access Private
router.post("/", customerController.createCustomer);

// @route GET /:id
// @desc Create customer
// @access Private
router.get("/:id", customerController.customerDetails);


// @route PUT /:id
// @desc Update customer
// @access Private
router.put("/:id", customerController.updateCustomer);

// @route DELETE /:id
// @desc Delete customer
// @access Private
router.delete("/:id", customerController.deleteCustomer);




module.exports = router;