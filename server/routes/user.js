var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');


router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/changepassword', userController.changePassword);
router.post('/edit', userController.editProfile);

module.exports = router;