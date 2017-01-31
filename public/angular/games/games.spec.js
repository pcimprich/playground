describe('uResGames module', function() {

	// Load the module that contains the `games` component before each test
  	beforeEach(module('uResGames'));

  	// Test the controller
  	describe('uResGames controller', function() {
		var $httpBackend, ctrl;
	  
		beforeEach(inject(function($componentController, _$httpBackend_) {
	  	  	$httpBackend = _$httpBackend_;
	  		$httpBackend.expectGET('/api/games?competition=1')
	    					.respond([{"id":1,"team_a":1,"team_b":2},{"id":2,"team_a":3,"team_b":4}]);
								
			ctrl = $componentController('uResGames');
	  		ctrl.competition = {"id": 1, "name": "C"};
	  		ctrl.$onInit();
		}));
	  
	
		it('should pass a `competition` object', inject(function($componentController) {
			expect(ctrl.competition).toEqual({"id": 1, "name": "C"});
		}));
	
	
		it('should create a `games` model with 2 items', inject(function($componentController) {
			expect(ctrl.games).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.games.length).toBe(2);
    	}));
	
	
    	it('should create a specific `games` model', inject(function($componentController) {
	  		expect(ctrl.games).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.games).toEqual([{"id":1,"team_a":1,"team_b":2},{"id":2,"team_a":3,"team_b":4}]);
    	}));

  	});

});
