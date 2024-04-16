// 2-get_students_by_loc.test.js

import getListStudents from './0-get_list_students';
import getStudentsByLocation from './2-get_students_by_loc';

describe('getStudentsByLocation', () => {
  it('should return an array of students located in the specified city', () => {
    const students = getListStudents();
    const city = 'San Francisco';

    const result = getStudentsByLocation(students, city);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);

    result.forEach(student => {
      expect(student.location).toBe(city);
    });
  });

  it('should return an empty array if no students are located in the specified city', () => {
    const students = getListStudents();
    const city = 'Los Angeles';

    const result = getStudentsByLocation(students, city);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
});
