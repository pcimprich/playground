var actionSetCompetition = require('../reducers/actions').actionSetCompetition;

const handleMenuSelection = (key, dispatch) => {

	if (key.substr(0,1) == 'C') {
		getCompetition(key.substr(1,1), dispatch)
  	} else {
  		// no action yet
  	}
}

const getCompetition = (id, dispatch) => {
	
	fetch('/api/competitions/' + id)
		.then(function(response) { return response.json(); })
			.then(function(competition) {
			//console.log('parsed competition: ', competition)
		
			fetch('/api/competitions/' + id + '/table')
				.then(function(response) { return response.json(); })
	  				.then(function(ranking) {
						
	    			//console.log('parsed ranking: ', ranking);
					competition.ranking = ranking;
				
					fetch('/api/games?competition=' + id)
						.then(function(response) { return response.json(); })
		  					.then(function(games) {
								
		   					//console.log('parsed games: ', games);
							competition.games = games;
			
							dispatch(actionSetCompetition(competition));
			
		  				}).catch(function(ex) {
		    				console.log('parsing failed: ', ex);
						});
			
	  			}).catch(function(ex) {
	    			console.log('parsing failed: ', ex);
				});
		
		}).catch(function(ex) {
			console.log('parsing failed: ', ex);
		});
}

module.exports.handleMenuSelection = handleMenuSelection;