// Register `uResCategories` component, along with its associated controller and template
angular.module('uResCategories').component('uResCategories', {
	templateUrl: '/angular/categories/categories.template.html',
    controller: ['$http',
		function CategoriesController($http) {
	
	    	var self = this;
	    
			this.$onInit = function() {            
		  		//console.log(self);
	      		$http.get('/api/categories?withCompetitions=1').then(
						
					function(responseCategories) {
						$http.get('/api/competitions/' + self.comp).then(
								
							function(responseCompetition) {
	        					self.categories = responseCategories.data;
								self.currentCategory = responseCompetition.data.category;
							}
						);
	      	  	  	}
				);
	    	};
      	}
    ],
	bindings: {
	    comp: '@'
	}
});
  