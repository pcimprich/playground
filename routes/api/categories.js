var express = require('express');
var router = express.Router();

var model = require('../../services/categories.model.js');

/* GET all categories, with or without their competitions */
router.get('/', function(req, res, next) {
	
	model.getCategories(function(rows){
		res.send(rows);	
	}, req.query.withCompetitions);
});

/* GET a category with given ID, with or without its competitions */
router.get('/:category', function(req, res, next) {
	
	model.getCategory(function(rows){
		res.send(rows);	
	}, req.params.category, req.query.withCompetitions);
});

module.exports = router;
