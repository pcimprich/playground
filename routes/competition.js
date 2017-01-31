var express = require('express');
var router = express.Router();

/* GET empy competition page for React */
router.get('/', function(req, res, next) {
	
	res.render('competition', 
		{ title: "uResults: Competition", competitionId: req.params.competition }
	);	
  
});

module.exports = router;
