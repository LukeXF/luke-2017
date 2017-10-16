var express = require('express');
var router = express.Router();
var sites = require('../data/sites.json');
var other = require('../data/sites-other.json');
var feedback = require('../data/feedback.json');

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', {title: 'Home', layout: false, sites: sites, feedback: feedback});
});

router.get('/about', function (req, res) {
	res.render('about', {title: 'About'});
});

router.get('/portfolio', function (req, res) {
	res.render('portfolio', {title: 'Portfolio', sites: sites, other: other});
});

router.get('/portfolio/:project', function (req, res) {
	res.render('project', {title: 'P', sites: sites, other: other});
});

router.get('/pricing', function (req, res) {
	res.render('pricing', {title: 'Pricing'});
});

module.exports = router;
