var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongo = require('mongoose');
var morgan = require('morgan');
require("dotenv").config();

//Routes
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware for /users    
app.use('/users', usersRouter);

//middleware ERROR

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


mongo.connect(process.env.MONGO_LOCAL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (err) => {
        if (err) throw err;
        console.log("Mongo db connection established");
    });

module.exports = app;
