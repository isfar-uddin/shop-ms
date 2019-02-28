const express = require('express');
const router = express.Router();
const userController = require('./../../controllers/auth/user.controller');
const authenticate = require('./../../middleware/authenticate');

// @route POST /auth
// @desc POST register
// @access Private
router.post('/register',userController.register);

// @route POST /auth
// @desc POST login
// @access Private
router.post('/login',userController.login);

router.get('/me',authenticate,userController.getCurrentUser);

module.exports = router;