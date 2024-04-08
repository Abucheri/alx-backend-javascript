// 8-getBudgetCurrentYear.test.js

import getBudgetForCurrentYear from './8-getBudgetCurrentYear';

describe('getBudgetForCurrentYear function', () => {
  test('should return an object with properties using ES6 computed property names', () => {
    const income = 2100;
    const gdp = 5200;
    const capita = 1090;
    const currentYear = (new Date()).getFullYear();

    const expectedBudget = {
      [`income-${currentYear}`]: income,
      [`gdp-${currentYear}`]: gdp,
      [`capita-${currentYear}`]: capita,
    };

    expect(getBudgetForCurrentYear(income, gdp, capita)).toEqual(expectedBudget);
  });
});
