// Register `games` component, along with its associated controller and template
angular.module('uResGames').component('uResNewGame', {
    templateUrl: '/angular/games/new-game.template.html',
    controller: ['$http', 'uresources',
		function GamesController($http, uresources) {
	
	    	var self = this;
			self.s = uresources.getResources();
			self.teamA = 1;
	    
			this.$onInit = function() {         
				
		  	  	//console.log(self.competition);
	      		$http.get('/api/teams?competition=' + self.competition.id).then(
					
					function(response) {
	        			self.teams = response.data;
	      		  	}
				);
	    	};
      	}
    ],
	bindings: {
	    competition: '<'
	}
});
