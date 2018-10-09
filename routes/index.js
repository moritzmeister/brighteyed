var express = require('express');
var jsonfile = require('jsonfile');
var pick = require('random-pick');

var router = express.Router();

//Example
//getHTML(idTweet, callback)

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'BrightEYEd',
		tag_title_description: 'Our blockchain is your diary',
		description: 'A blockchain platform to permanently store you vision condition'
	});
});

module.exports = router;