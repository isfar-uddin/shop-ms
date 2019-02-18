const express = require('express');

const router = express.Router();
const keys = require('../../config/keys');

const categoryController = require('../../controllers/category'); 

// @route GET api/categorys
// @desc Get cagegorys
// @access Private
router.get("/", categoryController.getAllCategory);


// @route POST api/category
// @desc POST category
// @access Private
router.post("/", categoryController.addCategory);


module.exports = router;
