// 10-loops.test.js

import appendToEachArrayValue from './10-loops';

describe('appendToEachArrayValue function', () => {
  test('should append string to each array value', () => {
    const inputArray = ['appended', 'fixed', 'displayed'];
    const appendString = 'correctly-';

    const result = appendToEachArrayValue(inputArray, appendString);

    expect(result).toEqual([
      'correctly-appended',
      'correctly-fixed',
      'correctly-displayed',
    ]);
  });

  test('should return an empty array when input array is empty', () => {
    const inputArray = [];
    const appendString = 'test';

    const result = appendToEachArrayValue(inputArray, appendString);

    expect(result).toEqual([]);
  });
});
