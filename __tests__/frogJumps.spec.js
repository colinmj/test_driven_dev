const frogJumps = require('../lib/frogJumps.js');

// this is called a suite, where we write our test function
describe('Frogs be a jumpin', () => {
  describe('when start is equal to end', () => {
    test('should return 0', () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  });

  describe('when start is greater than end', () => {
    test('should return a positive int', () => {
      const result = frogJumps(-2, 5, 5);
      expect(result).toEqual('error, Start must be above 0 but less than end');
    });
  });

  describe('when start is greater than end', () => {
    test('end should be greater than 0', () => {
      const result = frogJumps(10, -3, 5);
      expect(result).toEqual('error, end cannot be less than 0');
    });
  });

  describe('when jumplength is less than 0', () => {
    test('jumplength should be a positive int', () => {
      const result = frogJumps(10, 10, 0);
      expect(result).toEqual('error, jumplength has to be a positive int');
    });
  });

  describe('when jumplength is greater than roa', () => {
    test('jumplength should be less than road', () => {
      const result = frogJumps(10, 10, 25);
      expect(result).toEqual('This frog is too gangster for this tiny road');
    });
  });
});
