import listOfStudents from './9-hoisting';

describe('listOfStudents', () => {
  test('should be an array containing instances of StudentHolberton class', () => {
    expect(Array.isArray(listOfStudents)).toBe(true);
    listOfStudents.forEach(student => {
      expect(student.constructor.name).toBe('StudentHolberton');
    });
  });

  test('should have the correct number of elements', () => {
    expect(listOfStudents.length).toBe(5);
  });

  test('each student should have the correct properties and values', () => {
    const student1 = listOfStudents[0];
    expect(student1._firstName).toBe('Guillaume');
    expect(student1._lastName).toBe('Salva');
    expect(student1._holbertonClass.year).toBe(2020);
    expect(student1._holbertonClass.location).toBe('San Francisco');

    const student2 = listOfStudents[1];
    expect(student2._firstName).toBe('John');
    expect(student2._lastName).toBe('Doe');
    expect(student2._holbertonClass.year).toBe(2020);
    expect(student2._holbertonClass.location).toBe('San Francisco');

    const student3 = listOfStudents[2];
    expect(student3._firstName).toBe('Albert');
    expect(student3._lastName).toBe('Clinton');
    expect(student3._holbertonClass.year).toBe(2019);
    expect(student3._holbertonClass.location).toBe('San Francisco');

    const student4 = listOfStudents[3];
    expect(student4._firstName).toBe('Donald');
    expect(student4._lastName).toBe('Bush');
    expect(student4._holbertonClass.year).toBe(2019);
    expect(student4._holbertonClass.location).toBe('San Francisco');

    const student5 = listOfStudents[4];
    expect(student5._firstName).toBe('Jason');
    expect(student5._lastName).toBe('Sandler');
    expect(student5._holbertonClass.year).toBe(2019);
    expect(student5._holbertonClass.location).toBe('San Francisco');
  });
});
