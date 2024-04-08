// 12-createReportObject.test.js

import createReportObject from './12-createReportObject';

describe('createReportObject function', () => {
  test('should return an object with allEmployees and getNumberOfDepartments method', () => {
    const employeesList = {
      engineering: ['Bob', 'Jane'],
      marketing: ['Sylvie'],
    };

    const report = createReportObject(employeesList);

    expect(report).toHaveProperty('allEmployees', employeesList);

    expect(report).toHaveProperty('getNumberOfDepartments');
    expect(typeof report.getNumberOfDepartments).toBe('function');
  });

  test('getNumberOfDepartments should return the correct number of departments', () => {
    const employeesList = {
      engineering: ['Bob', 'Jane'],
      marketing: ['Sylvie'],
    };

    const report = createReportObject(employeesList);

    expect(report.getNumberOfDepartments()).toBe(2);
  });
});
