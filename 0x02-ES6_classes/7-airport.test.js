// 7-airport.test.js
import Airport from './7-airport.js';

describe('Airport', () => {
  it('should create an Airport object with specified attributes', () => {
    const airport = new Airport('San Francisco Airport', 'SFO');
    expect(airport._name).toBe('San Francisco Airport');
    expect(airport._code).toBe('SFO');
  });

  it('should return the correct string representation', () => {
    const airport = new Airport('San Francisco Airport', 'SFO');
    expect(airport.toString()).toBe('[object SFO]');
  });
});
