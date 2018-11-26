var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Sisko - Web Solutions', name: 'home' })
})

router.get('/team', function (req, res, next) {
  res.render('team', { title: 'Sisko - Team', name: 'team' })
})

router.get('/contact', function (req, res, next) {
  var subject = 'dini mär'
  var text = ''
  res.render('contact', { title: 'Sisko - Contact', name: 'contact', subject: subject, field: text, error: 'false', data: req.query })
})

router.get('/kontakt', function (req, res, next) {
  var subject = 'dini mär'
  var text = ''
  res.render('contact', { title: 'Sisko - Contact', name: 'contact', subject: subject, field: text, error: 'false', data: req.query })
})

module.exports = router;