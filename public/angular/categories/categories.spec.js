describe('uResCategories module', function() {

	// Load the module that contains the `teams` component before each test
  	beforeEach(module('uResCategories'));

  	// Test the controller
  	describe('uResCategories controller', function() {
		var $httpBackend, ctrl;
	  
		beforeEach(inject(function($componentController, _$httpBackend_) {
			$httpBackend = _$httpBackend_;
	  		$httpBackend.expectGET('/api/categories?withCompetitions=1')
	    					.respond([{"id":1,"name":"A","competitions":[{"id":1,"name":"C1"}]},{"id":2,"name":"B","competitions":[{"id":2,"name":"C2"}]}]);
							
	  		$httpBackend.expectGET('/api/competitions/1')
	    					.respond({"id":1,"name":"A","category":1});
							
			ctrl = $componentController('uResCategories');
	  		ctrl.comp = 1;
	  		ctrl.$onInit();
		}));
	  
	
		it('should pass a `competition` ID', inject(function($componentController) {
			expect(ctrl.comp).toBe(1);
		}));
	
	
		it('should create a `categories` model with 2 items', inject(function($componentController) {
			expect(ctrl.categories).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.categories.length).toBe(2);
    	}));
	
	
    	it('should create a specific `categories` model', inject(function($componentController) {
	  		expect(ctrl.categories).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.categories).toEqual([{"id":1,"name":"A","competitions":[{"id":1,"name":"C1"}]},{"id":2,"name":"B","competitions":[{"id":2,"name":"C2"}]}]);
    	}));
		
		it('should create a specific `competition` model', inject(function($componentController) {
			expect(ctrl.currentCategory).toBeUndefined();
	  		$httpBackend.flush();
	  		expect(ctrl.currentCategory).toBe(1);
    	}));

  	});

});
