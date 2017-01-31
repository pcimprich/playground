describe('uResTeams module', function() {

	// Load the module that contains the `teams` component before each test
  	beforeEach(module('uResTeams'));

  	// Test the controller
  	describe('uResTeams controller', function() {
		var $httpBackend, ctrl;
	  
		beforeEach(inject(function($componentController, _$httpBackend_) {
			$httpBackend = _$httpBackend_;
	  		$httpBackend.expectGET('/api/teams?competitions=1')
	    					.respond([{"id":1,"name":"A","category":1},{"id":2,"name":"B","category":2}]);
							
			ctrl = $componentController('uResTeams');
	  		ctrl.competition = {"id": 1, "name": "C"};
	  		ctrl.$onInit();
		}));
	  
	
		it('should pass a `competition` object', inject(function($componentController) {
			expect(ctrl.competition).toEqual({"id": 1, "name": "C"});
		}));
	
	
		it('should create a `teams` model with 2 items', inject(function($componentController) {
			expect(ctrl.teams).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.teams.length).toBe(2);
    	}));
	
	
    	it('should create a specific `teams` model', inject(function($componentController) {
	  		expect(ctrl.teams).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.teams).toEqual([{"id":1,"name":"A","category":1},{"id":2,"name":"B","category":2}]);
    	}));

  	});

});
