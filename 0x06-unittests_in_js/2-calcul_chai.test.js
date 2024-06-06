const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 for SUM of 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 for SUM of 1.2 and 3.7', function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 for SUBTRACT of 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return -2 for SUBTRACT of 1.5 and 3.7', function() {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 for DIVIDE of 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" for DIVIDE of 1.4 and 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 1 for DIVIDE of 3 and 3', function() {
      expect(calculateNumber('DIVIDE', 3, 3)).to.equal(1);
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for an invalid type', function() {
      expect(() => calculateNumber('INVALID', 1, 2)).to.throw();
    });
  });
});
