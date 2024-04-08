// 4-rest-parameter.test.js

import returnHowManyArguments from './4-rest-parameter';

describe('returnHowManyArguments function', () => {
  test('should return the number of arguments passed', () => {
    // Test with one argument
    expect(returnHowManyArguments("one")).toBe(1);

    // Test with multiple arguments
    expect(returnHowManyArguments("one", "two", 3, "4th")).toBe(4);

    // Test with no arguments
    expect(returnHowManyArguments()).toBe(0);
  });
});
