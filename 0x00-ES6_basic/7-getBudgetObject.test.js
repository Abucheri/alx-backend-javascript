// 7-getBudgetObject.test.js

import getBudgetObject from './7-getBudgetObject';

describe('getBudgetObject function', () => {
  test('should return an object with properties assigned using object property value shorthand syntax', () => {
    const income = 400;
    const gdp = 700;
    const capita = 900;

    const expectedBudget = {
      income,
      gdp,
      capita,
    };

    expect(getBudgetObject(income, gdp, capita)).toEqual(expectedBudget);
  });
});
