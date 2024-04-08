// 100-createIteratorObject.test.js

import createIteratorObject from './100-createIteratorObject';
import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

describe('createIteratorObject function', () => {
  test('should iterate over each employee in every department', () => {
    const employees = {
      ...createEmployeesObject('engineering', ['Bob', 'Jane']),
      ...createEmployeesObject('marketing', ['Sylvie']),
    };
    const report = createReportObject(employees);

    const reportIterator = createIteratorObject(report);

    const expectedEmployees = ['Bob', 'Jane', 'Sylvie'];

    for (const employee of expectedEmployees) {
      const { value, done } = reportIterator.next();
      expect(value).toBe(employee);
      expect(done).toBe(false);
    }

    // Check that the iterator has been exhausted
    expect(reportIterator.next().done).toBe(true);
  });
});
