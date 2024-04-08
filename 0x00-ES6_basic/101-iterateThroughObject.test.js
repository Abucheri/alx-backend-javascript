// 101-iterateThroughObject.test.js

import iterateThroughObject from './101-iterateThroughObject';
import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';
import createIteratorObject from './100-createIteratorObject';

describe('iterateThroughObject function', () => {
  test('should return employees separated by |', () => {
    const employees = {
      ...createEmployeesObject('engineering', ['Bob', 'Jane']),
      ...createEmployeesObject('marketing', ['Sylvie']),
    };
    const report = createReportObject(employees);
    const reportWithIterator = createIteratorObject(report);

    const expectedResult = 'Bob | Jane | Sylvie';
    const result = iterateThroughObject(reportWithIterator);

    expect(result).toEqual(expectedResult);
  });
});
