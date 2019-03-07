var express = require('express');
var http = require("http");
var https = require("https");
var userCtr = require('../controllers/users')
var request = require('request');
var appConfig = require('../config');
var common = require('../common');
var express_validate = require('express-joi-validator');
var validation = require('./validation');
var moment = require('moment');
var nodemailer = require('nodemailer');
var router = express.Router();

/**
 * user login
 */
router.post('/signin', express_validate(validation.user_signin), function (req, res, next) {
	userCtr.signIn(req).then(function(user){
		console.log('user', user);
		if (user){
			if(common.validPassword(req.body.password, user.password)){
				res.status(200).json({
					data: user
				})
			}else{
				res.status(300).json({
					message: "Wrong password.",
					code: 1
				})	
			}
		}else{
			res.status(300).json({
				message: "User doesn't exist.",
				code: 0
			})
		}
	})
});

/**
 *  user signup
 */

router.post('/signup', express_validate(validation.user_signup), function (req, res, next) {
	req.body.password = common.generateHash(req.body.password);
	userCtr.signUp(req).then(function(user){
		if (!user){
			res.status(300).json({
				message: "User exist already."
			})
		}else{
			res.status(200).json({
				data: user
			})
		}
	}).catch(function (error) {
		console.log(error);
		res.status(500).json({
			message: appConfig.env == "DEV" ? error.message : 'Error processing',
		})
	});
});


router.use(function (err, req, res, next) {
  if (err) {
    console.log(err);
    res.status(404).json({
     	message: appConfig.env == "DEV" ? err.message : "Invalid url",
    })
    return;
  }
});

module.exports = router
