// 0-get_list_students.test.js

import getListStudents from './0-get_list_students';

describe('getListStudents', () => {
  it('should return an array of objects with correct attributes', () => {
    const students = getListStudents();

    expect(Array.isArray(students)).toBe(true);

    students.forEach(student => {
      expect(student).toHaveProperty('id');
      expect(typeof student.id).toBe('number');
      expect(student).toHaveProperty('firstName');
      expect(typeof student.firstName).toBe('string');
      expect(student).toHaveProperty('location');
      expect(typeof student.location).toBe('string');
    });
  });

  it('should contain correct student objects in the array', () => {
    const expectedStudents = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    const students = getListStudents();

    expect(students).toEqual(expect.arrayContaining(expectedStudents));
  });
});
