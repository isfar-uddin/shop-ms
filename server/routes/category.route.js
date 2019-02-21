const express = require('express');

const router = express.Router();
const keys = require('../config/db.config');

const categoryController = require('../controllers/category.controller');

// @route GET /categorys
// @desc Get cagegorys
// @access Private
router.get("/", categoryController.getAllCategory);


// @route POST /categorys
// @desc POST category
// @access Private
router.post("/", categoryController.addCategory);

// @route GET /categorys/:id
// @desc GET category details
// @access Private
router.get("/:id", categoryController.categoryDetails);

// @route PUT /categorys/:id
// @desc PUT Products Update
// @access Private
router.put("/:id", categoryController.updateCategory);


// @route Delete /category/:id
// @desc Delete category
// @access Private
router.delete("/:id", categoryController.delateCategory);


module.exports = router;
