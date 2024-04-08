// 1-block-scoped.test.js

import taskBlock from './1-block-scoped';

describe('taskBlock function', () => {
  test('should not overwrite variables inside the conditional block', () => {
    expect(taskBlock(true)).toEqual([false, true]);
    expect(taskBlock(false)).toEqual([false, true]);
  });
});
