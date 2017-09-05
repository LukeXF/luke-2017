var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', {title: 'Home', layout: false});
});

router.get('/about', function (req, res) {
	res.render('about', {title: 'About'});
});

router.get('/portfolio', function (req, res) {
	res.render('portfolio', {title: 'Portfolio'});
});

router.get('/pricing', function (req, res) {
	res.render('pricing', {title: 'Pricing'});
});

module.exports = router;
