var express = require('express');
var router = express.Router();

var users = require('./users');
var views = require('./views');
var common = require('../common');
var appConfig = require('../config');

router.use('/', views);
router.use('/users', users);
router.use(common.checkToken);


router.use(function(error, req, res, next) {
    res.status(404).json({
        code: 1005,
        // 404 url error.
        message: "Invalid url"
    })
})

module.exports = router;