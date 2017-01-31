// Register `teams` component, along with its associated controller and template
angular.module('uResTeams').component('uResTeams', {
    templateUrl: '/angular/teams/teams.template.html',
    controller: ['$http',
		function TeamsController($http) {
	
	    	var self = this;
		
			this.$onInit = function() {            
		  	  	//console.log(self.competition);
	      		$http.get('/api/teams?competitions=' + self.competition.id).then(
					
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
  