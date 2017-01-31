describe('uResCompetition module', function() {

  // Load the module that contains the `uResCompetitions` component before each test
  beforeEach(module('uResCompetition', 'ngCookies', 'ui.bootstrap'));

  // Test the controller
  describe('uResCompetition controller', function() {
	var $httpBackend, ctrl;
	  
	beforeEach(inject(function($componentController, _$httpBackend_, $cookieStore) {
	  $httpBackend = _$httpBackend_;
	  $httpBackend.expectGET('/api/competitions/1')
	                    .respond({"id":1,"name":"A","category":1});
	  //$cookieStore.put('uContext', { 'category': 1 });

	  ctrl = $componentController('uResCompetition', {$cookieStore: $cookieStore});
	  ctrl.comp = 1;
	  ctrl.$onInit();
	}));
	
	
	it('should pass a `competiton` value', inject(function($componentController) {
		expect(ctrl.comp).toBe(1);
	}));
	
	
    it('should create a specific `competiton` object', inject(function($componentController) {
	  expect(ctrl.competition).toBeUndefined();
	  $httpBackend.flush();
	  expect(ctrl.competition).toEqual({"id":1,"name":"A","category":1});
    }));

  });

});
