var express = require('express');
var router = express.Router();

//Example
//getHTML(idTweet, callback)

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('landing', {
		title: 'BrightEYEd',
		tag_title_description: 'Our blockchain is your diary',
		description: 'A blockchain platform to permanently store you vision condition'
	});
});

router.get('/platform1', function(req, res, next) {
    res.render('doctorPatientView', {
        title: 'BrightEYEd',
        tag_title_description: 'Our blockchain is your diary',
        description: 'A blockchain platform to permanently store you vision condition',
        layout: 'doctorPatientView'
    });
});

router.get('/platform2', function(req, res, next) {
    res.render('doctorPatientSearch', {
        title: 'BrightEYEd',
        tag_title_description: 'Our blockchain is your diary',
        description: 'A blockchain platform to permanently store you vision condition',
        layout: 'doctorPatientSearch'
    });
});

router.get('/platform3', function(req, res, next) {
    res.render('researchView', {
        title: 'BrightEYEd',
        tag_title_description: 'Our blockchain is your diary',
        description: 'A blockchain platform to permanently store you vision condition',
        layout: 'researchView'
    });
});

module.exports = router;