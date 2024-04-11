import divideFunction from './8-try';

describe('divideFunction', () => {
  it('should divide two numbers correctly', () => {
    expect(divideFunction(10, 2)).toBe(5);
  });

  it('should throw an error when denominator is 0', () => {
    expect(() => {
      divideFunction(10, 0);
    }).toThrow('cannot divide by 0');
  });
});
