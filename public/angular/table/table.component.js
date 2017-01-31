// Register `uResTable` component, along with its associated controller and template
angular.module('uResTable').component('uResTable', {
	templateUrl: '/angular/table/table.template.html',
    controller: ['$http',
		function TableController($http) {
	
	    	var self = this;
	    
			this.$onInit = function() {            
		  	  	//console.log(self.competition);
	      		$http.get('/api/competitions/' + self.competition.id + '/table').then(
					function(response) {
	        			self.table = response.data;
	      		  }
			  );
	    	};
      	}
    ],
	bindings: {
	    competition: '<'
	}
});
  