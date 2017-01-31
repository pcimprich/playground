 // Test the filter
describe('checkmark', function() {

  // Load the module that contains the `checkmark` filter before each test
  beforeEach(module('uResCore'));

  it('should convert boolean values to unicode checkmark or cross',
    inject(function(checkmarkFilter) {
      expect(checkmarkFilter(true)).toBe('\u2713');
      expect(checkmarkFilter(false)).toBe('\u2718');
    })
  );

});
