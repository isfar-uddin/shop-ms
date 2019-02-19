const express = require('express');

const router = express.Router();


const brandController = require('../controllers/brand.controller');

// @route GET /brands
// @desc Get brandss
// @access Private
router.get("/", brandController.getAllBrand);


//@route POST /brand
//@desc post brand
//@access Private
router.post('/', brandController.createBrand)



//@route GET /brand/:id
//@desc get brand details
//@access Private
router.get('/:id', brandController.brandDetails)






module.exports = router;