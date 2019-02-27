const express = require('express');
const router = express.Router();
const userController = require('./../../controllers/auth/user.controller');

// @route POST /auth
// @desc POST register
// @access Private
router.post('/register',userController.register);

// @route POST /auth
// @desc POST login
// @access Private
router.post('/login',userController.login);

router.get('/me',userController.getCurrentUser);

module.exports = router;