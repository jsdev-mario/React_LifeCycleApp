var express = require('express');
var router = express.Router();

router.get('/a', function (req, res, next) {
	console.log('adfasf')
	res.render('index');
});

module.exports = router
