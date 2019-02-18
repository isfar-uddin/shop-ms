const express = require('express');

const router = express.Router();
const keys = require('../../config/keys');

const categoryController = require('../../controllers/category'); 

// @route GET api/categorys
// @desc Get cagegorys
// @access Private
router.get("/", categoryController.getAllCategory);


// @route POST api/categorys
// @desc POST category
// @access Private
router.post("/", categoryController.addCategory);

// @route GET api/categorys/:id
// @desc GET category details
// @access Private
router.get("/:id", categoryController.categoryDetails);

// @route PUT api/categorys/:id
// @desc PUT Products Update
// @access Private
router.put("/:id", categoryController.updateCategory);

module.exports = router;
