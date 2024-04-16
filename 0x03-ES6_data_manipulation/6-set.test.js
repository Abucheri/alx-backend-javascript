// 6-set.test.js

import setFromArray from './6-set';

describe('setFromArray', () => {
  it('should return a Set containing the elements of the input array', () => {
    const array = [12, 32, 15, 78, 98, 15];
    const resultSet = setFromArray(array);

    expect(resultSet instanceof Set).toBe(true);
    expect(Array.from(resultSet)).toEqual(expect.arrayContaining(array));
  });

  it('should handle empty arrays', () => {
    const array = [];
    const resultSet = setFromArray(array);

    expect(resultSet instanceof Set).toBe(true);
    expect(Array.from(resultSet)).toEqual([]);
  });
});
