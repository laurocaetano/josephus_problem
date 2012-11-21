describe('Josephus', function() {
  describe('With 43 soldiers', function() {
    it('should return that the last survivor is 31', function() {
      var josephus = new Josephus();
      expect(josephus.findTheLastSurvivor(41, 3)).toBe(31);
    });
  });
});