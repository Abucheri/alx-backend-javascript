// 0-constants.test.js

import { taskFirst, taskNext, getLast } from './0-constants';

describe('taskFirst function', () => {
  test('should return a string using const', () => {
    expect(typeof taskFirst()).toBe('string');
    expect(taskFirst()).toEqual('I prefer const when I can.');
  });

  test('should use const for variable declaration', () => {
    const fnString = taskFirst.toString();
    expect(fnString.includes('const')).toBe(true);
    expect(fnString.includes('let')).toBe(false);
  });
});

describe('taskNext function', () => {
  test('should return a string using let', () => {
    expect(typeof taskNext()).toBe('string');
    expect(taskNext()).toEqual('But sometimes let is okay');
  });

  test('should use let for variable declaration', () => {
    const fnString = taskNext.toString();
    expect(fnString.includes('const')).toBe(false);
    expect(fnString.includes('let')).toBe(true);
  });
});

describe('getLast function', () => {
  test('should return a string', () => {
    expect(typeof getLast()).toBe('string');
    expect(getLast()).toEqual(' is okay');
  });

  test('should not contain variable declaration', () => {
    const fnString = getLast.toString();
    expect(fnString.includes('const')).toBe(false);
    expect(fnString.includes('let')).toBe(false);
  });
});
