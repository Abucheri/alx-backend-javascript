// 7-has_array_values.test.js

import hasValuesFromArray from './7-has_array_values';

describe('hasValuesFromArray', () => {
  it('should return true if all elements in the array exist within the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const array = [1];

    const result = hasValuesFromArray(set, array);

    expect(result).toBe(true);
  });

  it('should return false if any element in the array does not exist within the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const array = [10];

    const result = hasValuesFromArray(set, array);

    expect(result).toBe(false);
  });

  it('should return false if any element in the array does not exist within the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const array = [1, 10];

    const result = hasValuesFromArray(set, array);

    expect(result).toBe(false);
  });
});
