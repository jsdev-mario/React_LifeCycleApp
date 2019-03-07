var appConfig = require('./config');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

exports.generateToken = function(user) {
    var token = jwt.sign({
            user_id: user._id.toString(),
        },
        appConfig.secret, {
            expiresIn: appConfig.token_expire_time,
        })
    return token;
}

exports.checkToken = function(req, res, next) {
    // check header or url params or post params for token
    if (req.method == "POST"){
        var token = req.body.token || req.query.token || req.headers['token'];
        if (token) {
            jwt.verify(token, appConfig.secret, function(error, decoded) {
                if (error) {
                    res.status(401).json({
                        message: "Invalid Token",
                    });
                } else {
                    if (decoded.user_id == undefined) {
                        res.status(401).json({
                            message: "Invalid Token",
                        });
                    }
                    req.body.user_id = decoded.user_id;
                    next();
                }
            });
        } else {
            res.status(403).json({
                message: "Invalid Token",
            })
        }
    }else if (req.method == "GET"){
        next();
    }
}

exports.convertObjectID = function(id_string) {
    if (mongoose.Types.ObjectId.isValid(id_string)) {
        return mongoose.Types.ObjectId(id_string);
    }
    return undefined;
}

exports.validateEmail = function(value) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

exports.validatePhone = function(value) {
    var phoneno = /^\+?([0-9]{2})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})[- ]?([0-9]{4})$/;
    return value.match(phoneno);
}

exports.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

exports.validPassword = function(login_pass, db_pass) {
    return bcrypt.compareSync(login_pass, db_pass);
};

exports.isNumber = function(string) {
    return !isNaN(parseFloat(string)) && isFinite(string);
}

exports.filterNumber = function(string){
    try{
        var number = "";
        console.log(string);
        for(i = 0; i < string.length; i++){
            if(this.isNumber(string[i])){
                number += string[i]
            }
        }
        return number;
    }catch(e){
        return 0;
    }
}

function isString(value){
    return typeof value === 'string' || value instanceof String;
}

