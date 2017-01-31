// Register `games` component, along with its associated controller and template
angular.module('uResGames').component('uResGames', {
    templateUrl: '/angular/games/games.template.html',
    controller: ['$http', 'uresources',
		function GamesController($http, uresources) {
	
	    	var self = this;
			self.s = uresources.getResources();
	    
			this.$onInit = function() {         
				
		  	  	//console.log(self.competition);
	      		$http.get('/api/games?competition=' + self.competition.id).then(
					
					function(response) {
	        			self.games = response.data;
	      		  	}
				);
	    	};
      	}
    ],
	bindings: {
	    competition: '<'
	}
});
