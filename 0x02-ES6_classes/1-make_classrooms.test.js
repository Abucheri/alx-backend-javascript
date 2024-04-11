// 1-make_classrooms.test.js
import initializeRooms from './1-make_classrooms';
import ClassRoom from './0-classroom';

describe('initializeRooms', () => {
  it('should return an array of ClassRoom objects with specified sizes', () => {
    const rooms = initializeRooms();
    expect(rooms.length).toBe(3);
    expect(rooms[0]).toBeInstanceOf(ClassRoom);
    expect(rooms[1]).toBeInstanceOf(ClassRoom);
    expect(rooms[2]).toBeInstanceOf(ClassRoom);
    expect(rooms[0]._maxStudentsSize).toBe(19);
    expect(rooms[1]._maxStudentsSize).toBe(20);
    expect(rooms[2]._maxStudentsSize).toBe(34);
  });
});
