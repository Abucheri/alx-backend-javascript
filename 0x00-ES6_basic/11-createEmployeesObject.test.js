// 11-createEmployeesObject.test.js

import createEmployeesObject from './11-createEmployeesObject';

describe('createEmployeesObject function', () => {
  test('should create an object with departmentName as key and employees array as value', () => {
    const departmentName = 'Software';
    const employees = ['Bob', 'Sylvie'];

    const result = createEmployeesObject(departmentName, employees);

    expect(result).toEqual({ Software: ['Bob', 'Sylvie'] });
  });

  test('should return an empty object if employees array is empty', () => {
    const departmentName = 'HR';
    const employees = [];

    const result = createEmployeesObject(departmentName, employees);

    expect(result).toEqual({ HR: [] });
  });
});
