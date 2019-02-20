const express = require('express');
const router = express.Router();
const userController = require('./../../controllers/auth/user.controller');

// @route POST /auth
// @desc POST signup
// @access Private
router.post('/signup',userController.signup);

module.exports = router;