var express = require('express');
var router = express.Router();

var model = require('../services/categories.model.js');

/* GET home page without competition ID */
router.get('/', function(req, res, next) {
	res.redirect('/index/1');
});

/* GET home page with competition ID */
router.get('/:competition', function(req, res, next) {
	
	var uResContext = {'competition': req.params.competition};
	res.cookie('uResContext', JSON.stringify(uResContext), { httpOnly: false });
	
	res.render('index', 
		{ title: "uResults: Competition", competitionId: req.params.competition }
	);	
  
});

module.exports = router;
