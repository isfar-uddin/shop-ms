const express = require('express');

const router = express.Router();


const brandController = require('../controllers/brand.controller');

// @route GET /brands
// @desc Get brandss
// @access Private
router.get("/", brandController.getAllBrand);


module.exports = router;