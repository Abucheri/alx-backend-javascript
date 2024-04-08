// 5-spread-operator.test.js

import concatArrays from './5-spread-operator';

describe('concatArrays function', () => {
  test('should concatenate two arrays and each character of a string using spread syntax', () => {
    const array1 = ['a', 'b'];
    const array2 = ['c', 'd'];
    const string = 'Hello';

    const expectedResult = ['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o'];

    expect(concatArrays(array1, array2, string)).toEqual(expectedResult);
  });
});
