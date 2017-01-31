var express = require('express');
var router = express.Router();

var model = require('../../services/teams.model.js');

/* GET all teams or all teams for a competition */
router.get('/', function(req, res, next) {
	
	model.getTeams(function(rows){
		res.send(rows);	
	}, req.query.competition);
});

/* GET a team with given ID */
router.get('/:team', function(req, res, next) {
	
	model.getTeam(function(rows){
		res.send(rows);	
	}, req.params.team);
});

module.exports = router;
