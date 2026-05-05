const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage();
    });
    it('should create a Mortgage instance', () => {
        expect(mortgage.constructor).to.exist;
    });
    it('should have a monthlyPayment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });
    it('should return the correct monthly payment with valid inputs', () => {
        // Pass the values to the CONSTRUCTOR here
        mortgage = new Mortgage(300000, 5, 5, 30);
        
        // Call the function with NO arguments
        expect(mortgage.monthlyPayment()).to.equal('2262.06');
    });
    it('should calculate the correct monthly payment for known values', () => {
    const testCases = [
      { p: 300000, i: 5, t: 30, per: 12, expected: '1610.46' },
      { p: 300000, i: 5, t: 5, per: 30, expected: '2262.06' },
      { p: 150000, i: 3.5, t: 15, per: 12, expected: '1072.32' }
    ];

    testCases.forEach(data => {
      const mortgage = new Mortgage(data.p, data.i, data.t, data.per);
      expect(mortgage.monthlyPayment()).to.equal(data.expected);
    });
  });
});