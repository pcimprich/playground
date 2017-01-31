var express = require('express');
var router = express.Router();

var model = require('../../services/versions.model.js');

/* GET versions of sw dependencies */
router.get('/', function(req, res, next) {
	
	model.getVersions(function(versions){
		res.send(versions);	
	});
});

module.exports = router;
