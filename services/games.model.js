var pool = require('./db');

/**
 * @apiDefine GameDTO
 * @apiSuccess (Game DTO) {String} [id] ID of the game.
 * @apiSuccess (Game DTO) {String} [date] Date of the game: yyyy-mm-ddThh:mm:ss.sssZ.
 * @apiSuccess (Game DTO) {String} competition ID of the competition.
 * @apiSuccess (Game DTO) {Number} team_a ID of the first team.
 * @apiSuccess (Game DTO) {Number} team_b ID of the second team.
 * @apiSuccess (Game DTO) {Number} full_a Full time points scored by the first team.
 * @apiSuccess (Game DTO) {Number} full_b Full time points scored by the second team.
 * @apiSuccess (Game DTO) {Number} [half_a] Half time points scored by the first team.
 * @apiSuccess (Game DTO) {Number} [half_b] Half time points scored by the second team.
 * @apiSuccess (Game DTO) {Number} [tries_a] Tries scored by the first team.
 * @apiSuccess (Game DTO) {Number} [tries_b] Tries scored by the second team.
 * @apiSuccess (Game DTO) {Number} round Round number within the competition.
 * @apiSuccess (Game DTO) {Boolean} [forfeit] Indicates if the game was forfeited.
 */

/**
 * @apiDefine GameDTOGet
 * @apiSuccess (Game DTO) {String} shortDate Short date of the game: dd.mm. yyyy.
 * @apiSuccess (Game DTO) {String} competitionName Name of the competition.
 * @apiSuccess (Game DTO) {String} competitionSeason Season of the competition.
 * @apiSuccess (Game DTO) {String} team_aName Name of the first team.
 * @apiSuccess (Game DTO) {String} team_bName Name of the second team.
 */

/** 
 * @api {get} /games 1. Get all games
 * @apiVersion 1.0.0
 * @apiName getGames
 * @apiGroup Games
 *
 * @apiParam {Number} [competition] Returns only games for the competition.
 *
 * @apiSuccess (Response) {Array} games[] Array of <code>Game DTO</code> objects.
 * @apiUse GameDTO
 * @apiUse GameDTOGet
 */
module.exports.getGames = function(callback, competition) {
	
	// all games for a competition
	if (competition) {
		pool.query("SELECT g.*, DATE_FORMAT(g.date, '%d.%m. %Y') AS shortDate, co.name AS competitionName, " + 
					"co.season AS competitionSeason, ta.name AS team_aName, tb.name AS team_bName " + 
					'FROM game AS g JOIN (competition AS co, team AS ta, team AS tb) ' + 
					'ON (g.competition = co.id AND g.team_a = ta.id AND g.team_b = tb.id) ' + 
					'WHERE g.competition = ? ORDER BY g.date DESC', 
					[competition], function(err, rows) {
			if (err) {
			  	console.error('error connecting: ' + err.stack);
			  	throw err;
		  	}
		  	callback(rows);
		});
		
	// all games
	} else {
		pool.query('SELECT g.*, co.name AS competitionName, ta.name AS team_aName, tb.name AS team_bName ' + 
					'FROM game AS g JOIN (competition AS co, team AS ta, team AS tb) ' + 
					'ON (g.competition = co.id AND g.team_a = ta.id AND g.team_b = tb.id) ' + 
					'ORDER BY g.date DESC', 
					function(err, rows) {
			if (err) {
				console.error('error connecting: ' + err.stack);
			  	throw err;
		  	}
		  	callback(rows);
		});
	}
};

/** 
 * @api {get} /games/:id 2. Get a specific game
 * @apiVersion 1.0.0
 * @apiName getGame
 * @apiGroup Games
 *
 * @apiParam {Number} :id ID of the game.
 *
 * @apiSuccess (Response) {JSON} game A <code>Game DTO</code> object.
 * @apiUse GameDTO
 * @apiUse GameDTOGet
 */
module.exports.getGame = function(callback, game) {
	
	if (game) {
		pool.query("SELECT g.*, DATE_FORMAT(g.date, '%d.%m. %Y') AS shortDate, co.name AS competitionName, " + 
					"co.season AS competitionSeason, ta.name AS team_aName, tb.name AS team_bName " + 
					'FROM game AS g JOIN (competition AS co, team AS ta, team AS tb) ' + 
					'ON (g.competition = co.id AND g.team_a = ta.id AND g.team_b = tb.id) ' + 
					'WHERE g.id = ?', 
					[game], function(err, rows) {
			if (err) {
			  	console.error('error connecting: ' + err.stack);
			  	throw err;
		  	}
		  	callback(rows[0]);
		});
		
	} else {
		var errorMessage = 'getGame: Mandatory `game` parameter missing'
		console.error(errorMessage);
		throw new Error(errorMessage);
	}
};

/** 
 * @api {post} /games 3. Create a new game
 * @apiVersion 1.0.0
 * @apiName createGame
 * @apiGroup Games
 *
 * @apiSuccess (Request) {JSON} body A <code>Game DTO</code> object.
 * @apiUse GameDTO
 */
module.exports.createGame = function(callback, game) {
	
	if (game) {
		var forfeit = game.forfeit ? game.forfeit : 0;	
		
		pool.query("INSERT INTO game (date, competition, team_a, team_b, full_a, full_b, round, forfeit) " + 
					"VALUES (CURDATE(), ?, ?, ?, ?, ?, ?, ?)", 
					[game.competition, game.team_a, game.team_b, game.full_a, game.full_b, game.round, forfeit], 
		
		function(err, result) {
			if (err) {
			  	console.error('error connecting: ' + err.stack);
			  	throw err;
		  	}
		  	callback(result);
			console.log('[createGame] Insert ID: ' + result.insertId)
		});
		
	} else {
		var errorMessage = 'getGame: Mandatory `new game` body missing'
		console.error(errorMessage);
		throw new Error(errorMessage);
	}
};