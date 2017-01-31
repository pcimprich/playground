 // Test the `uresources` service
describe('uresources service', function() {

  // Load the module that contains the `uresources` service before each test
  beforeEach(module('uResCore'));

  it('should return text strings',
    inject(function(uresources) {
      expect(uresources.getString('labelFilter')).toBe('Filter');
	  expect(uresources.getResources().buttonSubmit).toBe('Submit');
    })
  );
  
});
