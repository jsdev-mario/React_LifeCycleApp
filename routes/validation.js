var Joi = require('joi');
var config = require('../config');

exports.user_signin = {
    body: {
        user: Joi.string().required(),
        password: Joi.string().required(),
    }
}

exports.user_signup = {
    body: {
        email: Joi.string().required().email(),
        full_name: Joi.string().required(),
        password: Joi.string().required(),
    }
}