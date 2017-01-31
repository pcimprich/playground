var express = require('express');
var pjson = require('../package.json');
var router = express.Router();

/* GET About page */
router.get('/', function(req, res, next) {
	
	res.render('about', {title: "About uResults", 
						version: pjson.version, 
						node: process.versions, 
						express: pjson.dependencies.express}
	);
});

module.exports = router;
