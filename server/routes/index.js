var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
  console.log("resolve in index " + path.resolve('../dist/index.html'));
  console.log("static route called");
  res.sendFile(path.resolve('../dist/index.html'));
});

module.exports = router;
