describe('Josephus', function() {
  var josephus;
  
  beforeEach(function() {
    josephus = new Josephus();  
  });
  
  describe('With 43 soldiers and order 3', function() {
    it('should return that the last survivor is 31', function() {
      expect(josephus.findTheLastSurvivor(41, 3)).toBe(31);
    });
  });
  
  describe('With 123 soldiers and order 13', function() {
    it('the last survivor should be 33', function() {
      expect(josephus.findTheLastSurvivor(123, 13)).toBe(33);
    });
  });
  
  describe('With 912 soldiers and order 9', function() {
    it('the last survivor should be 501', function() {
      expect(josephus.findTheLastSurvivor(912, 9)).toBe(501);
    });
  });
});