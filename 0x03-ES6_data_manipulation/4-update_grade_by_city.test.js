// 4-update_grade_by_city.test.js

import getListStudents from './0-get_list_students';
import updateStudentGradeByCity from './4-update_grade_by_city';

describe('updateStudentGradeByCity', () => {
  it('should update student grades for the specified city with new grades', () => {
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
    const city = 'San Francisco';
    const newGrades = [
      { studentId: 5, grade: 97 },
      { studentId: 1, grade: 86 }
    ];

    const result = updateStudentGradeByCity(students, city, newGrades);

    expect(result).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
    ]);
  });

  it('should set grade to "N/A" if student does not have a grade in newGrades', () => {
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
    const city = 'San Francisco';
    const newGrades = [
      { studentId: 5, grade: 97 }
    ];

    const result = updateStudentGradeByCity(students, city, newGrades);

    expect(result).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A' },
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
    ]);
  });
});
