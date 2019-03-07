var userModel = require('../models/user');
var moment = require('moment');
var appConfig = require('../config');
var common = require('../common');

exports.signUp = function (req) {
    const search_items = {
        $or: [
            {email: req.body.email},
            {full_name: req.body.full_name}
        ]
    }
    return userModel.findOne(search_items)
        .then(function(user){
            if(!user){
                return userModel.create(req.body);
            }
            return null;
        })
}

exports.signIn = function (req) {
    const search_items = {
        $or: [
            {email: req.body.user},
            {full_name: req.body.user}
        ]
    }
    return userModel.findOne(search_items)
}
