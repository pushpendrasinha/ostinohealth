var express = require('express');
var router = express.Router();
var path = require('path');
var commonController = require('../controllers/user');
/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
  console.log("resolve in index " + path.resolve('../dist/index.html'));
  console.log("static route called");
  res.sendFile(path.resolve('../dist/index.html'));
});

router.post('/login', commonController.login);
router.post('/register', commonController.register);

module.exports = router;
