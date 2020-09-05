var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongo = require('mongoose');
var morgan = require('morgan');
var cors = require('cors');
require("dotenv").config();

//Routes
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var commentsRouter = require('./routes/comment');
var app = express();

// app.use(logger('dev'));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));

//middleware for /users    
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comment', commentsRouter);
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
        useCreateIndex: true,
        useFindAndModify: false
    }, (err) => {
        if (err) throw err;
        console.log("Mongo db connection established");
    });

module.exports = app;
