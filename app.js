var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var appConfig = require('./config');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
try {
    mongoose.connect(appConfig.dbURL, {
        useNewUrlParser: true 
    });
} catch (e) {
    console.log(e)
}

var app = express();
var routes = require('./routes');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); //cross origin resource sharing
app.use(session({
    secret: appConfig.secret,
    resave: false,
    saveUninitialized: true,
}));

// Routes
app.use('/', routes);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
