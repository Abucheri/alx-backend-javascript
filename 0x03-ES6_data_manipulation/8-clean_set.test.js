// 8-clean_set.test.js

import cleanSet from './8-clean_set';

describe('cleanSet', () => {
  it('should return a string of values from the set that start with the specified startString', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    const startString = 'bon';

    const result = cleanSet(set, startString);

    expect(result).toBe('jovi-aparte-appetit');
  });

  it('should return an empty string if startString is empty', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);

    const result = cleanSet(set, '');

    expect(result).toBe('');
  });

  it('should return an empty string if startString is not a string', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    const startString = 123;

    const result = cleanSet(set, startString);

    expect(result).toBe('');
  });
});
