var express = require('express');
var router = express.Router();

var model = require('../../services/games.model.js');

/* GET all games or all games for a competition*/
router.get('/', function(req, res, next) {
	
	model.getGames(function(rows){
		res.send(rows);	
	}, req.query.competition);
});

/* GET a game with given ID */
router.get('/:game', function(req, res, next) {
	
	model.getGame(function(rows){
		res.send(rows);	
	}, req.params.game);
});

/* POST a new game */
router.post('/', function(req, res, next) {
	
	model.createGame(function(result){
		res.redirect('/index/' + req.body.competition);
	}, req.body);
});

module.exports = router;
