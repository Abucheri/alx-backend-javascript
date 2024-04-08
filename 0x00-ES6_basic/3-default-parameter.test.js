// 3-default-parameter.test.js

import getSumOfHoods from './3-default-parameter';

describe('getSumOfHoods function', () => {
  test('should return the sum of initialNumber and default expansion values', () => {
    // Test with only initialNumber provided
    expect(getSumOfHoods(34)).toBe(34 + 89 + 19);

    // Test with initialNumber and expansion1989 provided
    expect(getSumOfHoods(34, 3)).toBe(34 + 3 + 19);

    // Test with initialNumber, expansion1989, and expansion2019 provided
    expect(getSumOfHoods(34, 3, 4)).toBe(34 + 3 + 4);
  });

  test('should return the sum of initialNumber and provided expansion values', () => {
    // Test with all parameters provided
    expect(getSumOfHoods(34, 50, 60)).toBe(34 + 50 + 60);
  });
});
