var pool = require('./db');

/**
 * @apiDefine TeamDTO
 * @apiSuccess (Team DTO) {String} id ID of the team.
 * @apiSuccess (Team DTO) {String} name Name of the team.
 * @apiSuccess (Team DTO) {String} club ID of the club.
 * @apiSuccess (Team DTO) {String} category ID of the category.
 * @apiSuccess (Team DTO) {String} competition ID of the competition.
 * @apiSuccess (Team DTO) {String} clubName Name of the club.
 * @apiSuccess (Team DTO) {String} categoryName Name of the category.
 */

/** 
 * @api {get} /teams 1. Get all teams
 * @apiVersion 1.0.0
 * @apiName getTeams
 * @apiGroup Teams
 *
 * @apiParam {Number} [competition] Returns only teams that take part in the competition.
 *
 * @apiSuccess (Response) {Array} teams[] Array of <code>Team DTO</code> objects.
 * @apiUse TeamDTO
 */
module.exports.getTeams = function(callback, competition) {
	
	// all teams for a competition
	if (competition) {
		pool.query('SELECT t.*, cl.name AS clubName, ca.name AS categoryName ' + 
					'FROM team AS t JOIN (club AS cl, category AS ca) ON (t.club = cl.id AND t.category = ca.id) ' + 
					'WHERE t.competition = ? ORDER BY t.id', 
					[competition], function(err, rows) {
		  if (err) {
			  console.error('error connecting: ' + err.stack);
			  throw err;
		  }
		  callback(rows);
		});
		
	// all teams	
	} else {
		pool.query('SELECT t.*, cl.name AS clubName, ca.name AS categoryName ' + 
					'FROM team AS t JOIN (club AS cl, category AS ca) ON (t.club = cl.id AND t.category = ca.id) ' + 
					'ORDER BY t.id', 
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
 * @api {get} /teams/:id 2. Get a specific team
 * @apiVersion 1.0.0
 * @apiName getTeam
 * @apiGroup Teams
 *
 * @apiParam {Number} :id ID of the team.
 *
 * @apiUse TeamDTO
 */
module.exports.getTeam = function(callback, team) {
	
	// team by Id
	if (team) {
		pool.query('SELECT t.*, cl.name AS clubName, ca.name AS categoryName ' + 
					'FROM team AS t JOIN (club AS cl, category AS ca) ON (t.club = cl.id AND t.category = ca.id) ' + 
					'WHERE t.id = ?', 
					[team], function(err, rows) {
		  if (err) {
			  console.error('error connecting: ' + err.stack);
			  throw err;
		  }
		  callback(rows[0]);
		});
		
	} else {
		var errorMessage = 'getTeam: Mandatory `team` parameter missing'
		console.error(errorMessage);
		throw new Error(errorMessage);
	}
};
