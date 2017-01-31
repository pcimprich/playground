var express = require('express');
var router = express.Router();

var model = require('../../services/competitions.model.js');

/* GET all competitions or all competitions for a category */
router.get('/', function(req, res, next) {
	
	model.getCompetitions(function(rows){
		res.send(rows);	
	}, req.query.category);
});

/* GET a competition with given ID */
router.get('/:competition', function(req, res, next) {
	
	model.getCompetition(function(rows){
		res.send(rows);	
	}, req.params.competition);
});

/* GET a table of competition with given ID */
router.get('/:competition/table', function(req, res, next) {
	
	model.getTable(function(rows){
		res.send(rows);	
	}, req.params.competition);
});

module.exports = router;
