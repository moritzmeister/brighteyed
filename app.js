var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var hbs = require('express-handlebars');

var app = express();

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'landing', layoutsDir: __dirname + '/views/' }))

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
module.exports = app;