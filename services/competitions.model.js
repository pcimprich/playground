var pool = require('./db');
var teams = require('./teams.model');
var games = require('./games.model');

/**
 * @apiDefine CompetitionDTO
 * @apiSuccess (Competition DTO) {String} id ID of the competition.
 * @apiSuccess (Competition DTO) {String} name Name of the competitions.
 * @apiSuccess (Competition DTO) {String} category ID of the category.
 * @apiSuccess (Competition DTO) {String} season Season of the competition.
 * @apiSuccess (Competition DTO) {Number} year Year the competiton starts.
 * @apiSuccess (Competition DTO) {Boolean} active Indicates if the competition is still active.
 * @apiSuccess (Competition DTO) {String} categoryName Name of the category. 
 */

/** 
 * @api {get} /competitions 1. Get all competitions
 * @apiVersion 1.0.0
 * @apiName getCompetitions
 * @apiGroup Competitions
 *
 * @apiParam {Number} [category] Returns only competitions for the category.
 *
 * @apiSuccess (Response) {Array} competitions[] Array of <code>Competition DTO</code> objects.
 * @apiUse CompetitionDTO
 */
module.exports.getCompetitions = function(callback, category) {
	
	if (category) {
		pool.query('SELECT co.*, ca.name AS categoryName ' + 
					'FROM competition AS co JOIN category AS ca ON co.category = ca.id ' + 
					'WHERE co.category = ? ORDER BY co.id', 
					[category], function(err, rows) {
		  if (err) {
			  console.error('error connecting: ' + err.stack);
			  throw err;
		  }
		  callback(rows);
		});
		
	} else {
		pool.query('SELECT co.*, ca.name AS categoryName ' + 
					'FROM competition AS co JOIN category AS ca ON co.category = ca.id ' + 
					'ORDER BY co.id', 
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
 * @api {get} /competitions/:id 2. Get a specific competition
 * @apiVersion 1.0.0
 * @apiName getCompetition
 * @apiGroup Competitions
 *
 * @apiParam {Number} :id ID of the competition.
 *
 * @apiUse CompetitionDTO
 */
module.exports.getCompetition = function(callback, competition) {
	
	if (competition) {
		pool.query('SELECT co.*, ca.name AS categoryName ' + 
					'FROM competition AS co JOIN category AS ca ON co.category = ca.id ' + 
					'WHERE co.id = ?', 
					[competition], function(err, rows) {
		  if (err) {
			  console.error('error connecting: ' + err.stack);
			  throw err;
		  }
		  callback(rows[0]);
		});
		
	} else {
		var errorMessage = 'getTable: Mandatory `competition` parameter missing'
		console.error(errorMessage);
		throw new Error(errorMessage);
	}
};

/** 
 * @api {get} /competitions/:id/table 3. Get a competition table
 * @apiVersion 1.0.0
 * @apiName getTable
 * @apiGroup Competitions
 *
 * @apiParam {Number} :id Returns ranking table for the competition.
 *
 * @apiSuccess (Response) {Array} tableRows[] Array of <code>TableRow DTO</code> objects.
 * @apiSuccess (TableRow DTO) {String} id ID of team playing the competition.
 * @apiSuccess (TableRow DTO) {String} name Name of team playing the competition.
 * @apiSuccess (TableRow DTO) {String} competition ID of the competition.
 * @apiSuccess (TableRow DTO) {Number} games Number of games played by the team.
 * @apiSuccess (TableRow DTO) {Number} pointsTotal Total table points gained by the team.
 * @apiSuccess (TableRow DTO) {Number} scorePlus Scored by the team in total.
 * @apiSuccess (TableRow DTO) {Number} scoreMinus Scored by opponents of the team in total.
 * @apiSuccess (TableRow DTO) {Number} wins Total number of wins of the team.
 * @apiSuccess (TableRow DTO) {Number} defeats Total number of defeats of the team.
 * @apiSuccess (TableRow DTO) {Number} draws Total number of wins draws of team.
 * @apiSuccess (TableRow DTO) {Number} forfeits Total number of wins forfeits of the team.
 */
module.exports.getTable = function(callback, competition) {
	
	if (competition) {
		
		teams.getTeams(function(teams){
			games.getGames(function(games){
				
				var records = [];
				for (team of teams) {
				  
				  	// new table record created for each team
					var index = records.push({"id":team.id, "name":team.name, "competition":team.competition,
				  								"games":0, "pointsTotal":0, "scorePlus":0, "scoreMinus":0, 
												"wins":0, "defeats":0, "draws":0, "forfeits":0}) - 1;
				  	for (game of games) {
						// A team of the game
						if (game.team_a == team.id) {
							records[index].games++;
							records[index].scorePlus = records[index].scorePlus + game.full_a;
							records[index].scoreMinus = records[index].scoreMinus + game.full_b;
							// win
						  	if (game.full_a > game.full_b) { 
								records[index].wins++;
								records[index].pointsTotal = records[index].pointsTotal + 3;
							// defeat	
							} else if (game.full_a < game.full_b) {
								records[index].defeats++;
								if (game.forfeit) {
									records[index].pointsTotal--;
									records[index].forfeits++;
								} else records[index].pointsTotal++;
							// draw
							} else {
								records[index].draws++;
								records[index].pointsTotal = records[index].pointsTotal + 2;
							}
					  	
						// B team of the game
						} else if (game.team_b == team.id) {
							records[index].games++;
							records[index].scorePlus = records[index].scorePlus + game.full_b;
							records[index].scoreMinus = records[index].scoreMinus + game.full_a;
							// win
						  	if (game.full_b > game.full_a) { 
								records[index].wins++; 
								records[index].pointsTotal = records[index].pointsTotal + 3;
							// defeat	
							} else if (game.full_b < game.full_a) {
								records[index].defeats++;
								if (game.forfeit) {
									records[index].pointsTotal--;
									records[index].forfeits++;
								} else records[index].pointsTotal++;
							// draw
							} else {
								records[index].draws++;
								records[index].pointsTotal = records[index].pointsTotal + 2;
							}
					  	}
				  	}
				}
			
				callback(records);	
			
			}, competition);
		}, competition);
		
	} else {
		var errorMessage = 'getTable: Mandatory `competition` parameter missing'
		console.error(errorMessage);
		throw new Error(errorMessage);
	}
	
};
