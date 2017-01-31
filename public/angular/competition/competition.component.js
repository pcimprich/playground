// Register `uResCompetition` component, along with its associated controller and template
angular.module('uResCompetition').component('uResCompetition', {
    templateUrl: '/angular/competition/competition.template.html',
    controller: ['$http', '$cookies',
	  	function CompetitionController($http, $cookies) {
	
	    	var self = this;
			//var uResContext = JSON.parse($cookies.get('uResContext'));
			//self.uResContext = uResContext;
		
			this.$onInit = function() {            
		  		//console.log(self);
  	      		$http.get('/api/competitions/' + self.comp).then(
						
					function(response) {
  	        			self.competition = response.data;
  	      			 }
				  );
	    	};
      	 }
    ],
	bindings: {
	    comp: '@'
	}
});
  