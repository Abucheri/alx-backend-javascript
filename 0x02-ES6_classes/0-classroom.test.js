// 0-classroom.test.js
import ClassRoom from './0-classroom.js';

describe('ClassRoom', () => {
  it('should create a ClassRoom object with maxStudentsSize attribute', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});
