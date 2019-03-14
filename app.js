var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');

/* ROUTER INCLUDES */
var indexRouter = require('./routes/index');
var cocktailRouter = require('./routes/cocktail');
var cocktailResRouter = require('./routes/cocktail_results');

var app = express();

/* VIEW ENGINE SETUP */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var blocks = {};

hbs.registerHelper('extend', function(name, context) {
  var block = blocks[name];

  if (!block) {
    block = blocks[name] = [];
  }

  block.push(context.fn(this));
});

hbs.registerHelper('block', function(name) {
  var val = (blocks[name] || []).join('\n');
  blocks[name] = [];
  return val;
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* ROUTER INSTANTIATION */
app.use('/', indexRouter);
app.use('/cocktail', cocktailRouter);
app.use('/cocktail_results', cocktailResRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
