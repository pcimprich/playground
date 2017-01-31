var pool = require('./db');

/**
 * @apiDefine CategoryDTO
 * @apiSuccess (Category DTO) {String} id  ID of the category.
 * @apiSuccess (Category DTO) {String} name  Name of the category.
 * @apiSuccess (Category DTO) {Array} [competitions[]]  Array of reduced competition objects: {"id":"ID", "name":"NAME"}.
 */

/** 
 * @api {get} /categories 1. Get all categories
 * @apiVersion 1.0.0
 * @apiName getCategories
 * @apiGroup Categories
 *
 * @apiParam {Boolean} [withCompetitions] Indicates if active competitions for each category is included.
 *
 * @apiSuccess (Response) {Array} categories[] Array of <code>Category DTO</code> objects.
 * @apiUse CategoryDTO
 */
module.exports.getCategories = function(callback, withCompetitions) {
	
	// get categories including their active competitions
	if (withCompetitions) {
		pool.query('SELECT ca.*, co.name AS compName, co.id AS compId ' + 
					'FROM category AS ca JOIN competition AS co ON ca.id = co.category ' + 
					'WHERE co.active = ? ORDER BY ca.id, co.id', 
					[true], function(err, rows) {
						
	  		if (err) {
		  		console.error('error connecting: ' + err.stack);
		  	  	throw err;
	  	  	}
			
			var data = []
			var categoryId = 0;
			var index;
			
			// creating a tree structure of competitons for each category
			for (item of rows) {
				// new category
				if (item.id != categoryId) { 
					index = data.push({"id":item.id, "name":item.name, 
										"competitions":[{"id":item.compId, "name":item.compName}]}) - 1;
					categoryId = item.id;
					
				// category already included	
				} else {
					data[index].competitions.push({"id":item.compId, "name":item.compName});
				}	
			}
			callback(data);
		});
	
	// get only categories, without competitions	
	} else {
		pool.query('SELECT * FROM category ORDER BY id', function(err, rows) {
			
	  		if (err) {
		  		console.error('error connecting: ' + err.stack);
		  	  	throw err;
	  	  	}
			callback(rows);
		});
	}
};

/** 
 * @api {get} /categories/:id 2. Get a specific category
 * @apiVersion 1.0.0
 * @apiName getCategory
 * @apiGroup Categories
 *
 * @apiParam {Number} :id ID of the category.
 * @apiParam {Boolean} [withCompetitions] Indicates if active competitions for the category is included.
 *
 * @apiUse CategoryDTO
 */
module.exports.getCategory = function(callback, category, withCompetitions) {
	
	// get category including its active competitions
	if (withCompetitions) {
		pool.query('SELECT ca.*, co.name AS compName, co.id AS compId ' + 
					'FROM category AS ca JOIN competition AS co ON ca.id = co.category ' + 
					'WHERE ca.id = ? AND co.active = ? ORDER BY ca.id', 
					[category, true], function(err, rows) {
						
	  		if (err) {
		  		console.error('error connecting: ' + err.stack);
		  	  	throw err;
	  	  	}
			
			var data = [];
			var categoryId = 0;
			var index;
			
			// creating a tree structure of competitons for each category
			
			for (item of rows) {
				// new category
				if (item.id != categoryId) { 
					index = data.push({"id":item.id, "name":item.name, 
										"competitions":[{"id":item.compId, "name":item.compName}]}) - 1;
					categoryId = item.id;
					
				// category already included	
				} else {
					data[index].competitions.push({"id":item.compId, "name":item.compName});
				}	
			}
			
			callback(data[0]);
		});
	
	// get only category, without competitions	
	} else {
		pool.query('SELECT * FROM category WHERE id = ?', [category], function(err, rows) {
			
	  		if (err) {
		  		console.error('error connecting: ' + err.stack);
		  	  	throw err;
	  	  	}
			callback(rows[0]);
		});
	}
};
