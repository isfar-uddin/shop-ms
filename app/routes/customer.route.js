const express = require("express");

const router = express.Router();

const keys = require('../config/config');

const customerController = require('../controllers/customer.controller');

// @route GET /customers
// @desc Get customers
// @access Private
router.get("/", customerController.getAllCustomer);

// @route POST /customer
// @desc Create customer
// @access Private
router.post("/", customerController.createCustomer);




module.exports = router;