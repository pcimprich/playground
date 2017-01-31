describe('uResGames module', function() {

	// Load the module that contains the `games` component before each test
  	beforeEach(module('uResGames'));

  	// Test the controller
  	describe('uResNewGame controller', function() {
		var $httpBackend, ctrl;
	  
		beforeEach(inject(function($componentController, _$httpBackend_) {
	  	  	$httpBackend = _$httpBackend_;
	  		$httpBackend.expectGET('/api/teams?competition=1')
	    					.respond([{"id":1,"name":"A","category":1},{"id":2,"name":"B","category":2}]);
								
			ctrl = $componentController('uResNewGame');
	  		ctrl.competition = {"id": 1, "name": "C"};
	  		ctrl.$onInit();
		}));
	  
	
		it('should pass a `competition` object', inject(function($componentController) {
			expect(ctrl.competition).toEqual({"id": 1, "name": "C"});
		}));
	
	
		it('should create a `games` model with 2 items', inject(function($componentController) {
			expect(ctrl.teams).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.teams.length).toBe(2);
    	}));
	
	
    	it('should create a specific `games` model', inject(function($componentController) {
	  		expect(ctrl.teams).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.teams).toEqual([{"id":1,"name":"A","category":1},{"id":2,"name":"B","category":2}]);
    	}));

  	});

});
