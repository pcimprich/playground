describe('uResTable module', function() {

	// Load the module that contains the `uResTable` component before each test
  	beforeEach(module('uResTable'));

  	// Test the controller
  	describe('uResTable controller', function() {
		var $httpBackend, ctrl;
	  
		beforeEach(inject(function($componentController, _$httpBackend_) {
	  	  	$httpBackend = _$httpBackend_;
	  		$httpBackend.expectGET('/api/competitions/1/table')
	    					.respond([{"id":1,"pointsTotal":10,"scorePlus":25},{"id":2,"pointsTotal":15,"scorePlus":40}]);
							
			ctrl = $componentController('uResTable');
	  		ctrl.competition = {"id": 1, "name": "C"};
	  		ctrl.$onInit();
		}));
	  
	
		it('should pass a `competition` object', inject(function($componentController) {
			expect(ctrl.competition).toEqual({"id": 1, "name": "C"});
		}));
	
	
		it('should create a `table` model with 2 items', inject(function($componentController) {
			expect(ctrl.table).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.table.length).toBe(2);
    	}));
	
	
    	it('should create a specific `table` model', inject(function($componentController) {
	  		expect(ctrl.table).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.table).toEqual([{"id":1,"pointsTotal":10,"scorePlus":25},{"id":2,"pointsTotal":15,"scorePlus":40}]);
    	}));

  	});

});
