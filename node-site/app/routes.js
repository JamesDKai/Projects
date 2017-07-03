// require express
var express = require('express');
var path = require('path');
//create router object
var router = express.Router();

//export this router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
 	res.render('pages/home');
});

// route for about page
router.get('/about', function(req, res) {
	var users = [
		{name: 'Sample', email: 'sample@sample.com', avatar: 'http://lorempixel.com/300/300'},
		{name: 'Sample2', email: 'sample2@sample.com', avatar: 'http://lorempixel.com/300/300'},
		{name: 'Sample3', email: 'sample3@sample.com', avatar: 'http://lorempixel.com/300/300'},
		{name: 'Sample4', email: 'sample4@sample.com', avatar: 'http://lorempixel.com/300/300'}
	];

	res.render('pages/about', {users: users});
});

router.get('/contact', function(req, res) {
	res.render('pages/contact');
});

router.post('/contact', function(req, res) {
	res.send('Thanks for contacting us, ' + req.body.name +'! We will respond shortly');
});
