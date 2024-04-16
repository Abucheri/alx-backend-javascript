// 1-get_list_student_ids.test.js

import getListStudentIds from './1-get_list_student_ids';

describe('getListStudentIds', () => {
  it('should return an array of student ids when given an array of student objects', () => {
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    const expectedIds = [1, 2, 5];

    expect(getListStudentIds(students)).toEqual(expectedIds);
  });

  it('should return an empty array when given a non-array argument', () => {
    expect(getListStudentIds('hello')).toEqual([]);
    expect(getListStudentIds(123)).toEqual([]);
    expect(getListStudentIds({})).toEqual([]);
    expect(getListStudentIds(null)).toEqual([]);
  });
});
