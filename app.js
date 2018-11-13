var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var routing = require('./routes/routing')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


app.use(routing)
app.get('*', function (req, res) {
  res.status(404).render('404')
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
});

module.exports = app


/*
var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var routing = require('./routes/routing')
var admin = require('./routes/admin')
var database = require('./lib/db/database')
var fileUpload = require('express-fileupload')
var session = require('express-session')
var flash = require('connect-flash')
var app = express()

database.download()

// lowercase everything
app.use(require('express-uncapitalize')())
app.use(fileUpload())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public'), {}))

app.use(session({
    name: 'session',
    secret: '12>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0345',
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser('secretString'))
app.use(flash())

app.use(function (req, res, next) {
    res.locals.success_message = req.flash('success_message')
    res.locals.error_message = req.flash('error_message')
    next()
})

app.use(routing)
app.use(admin)
app.get('*', function (req, res) {
  res.status(404).render('404')
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app

*/