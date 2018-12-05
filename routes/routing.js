var express = require('express');
var router = express.Router();
var url = require('url')
var mailgun = require('mailgun-js')({apiKey: process.env.apiKey, domain: process.env.mailDomain})

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Sisko - Web Solutions', name: 'home' })
})

router.get('/team', function (req, res, next) {
  res.render('team', { title: 'Sisko - Team', name: 'team' })
})

router.get('/impressum', function (req, res, next) {
  res.render('impressum', { title: 'Sisko - Impressum', name: 'impressum' })
})

router.get('/keks', function (req, res, next) {
  res.render('keks', { title: 'kekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskekskeks', name: 'keks' })
})

router.get('/contact', function (req, res, next) {
  var subject = ''
  var text = ''
  res.render('contact', { title: 'Sisko - Kontakt', name: 'contact', subject: subject, field: text, error: 'false', data: req.query })
})

router.get('/kontakt', function (req, res, next) {
  var subject = ''
  var text = ''
  res.render('contact', { title: 'Sisko - Kontakt', name: 'contact', subject: subject, field: text, error: 'false', data: req.query })
})

router.post('/kontakt', function (req, res) {
        var mailOpts
        mailOpts = {
            from: '' + req.body.name + ' ' + req.body.email + '',
            to: 'contact@sisko-solutions.ch',
            subject: '[Sisko Homepage] ' + req.body.subject,
            text: req.body.message
        }

        mailgun.messages().send(mailOpts).then(function (result) {
                console.log(result)
                return res.redirect('/kontakt')
            }).catch(function (error) {
                console.error(error)
                return res.redirect(url.format({
                    pathname: '/kontakt',
                    query: req.body
                }))
        })
})

module.exports = router;
