// 9-getFullBudget.test.js

import getFullBudgetObject from './9-getFullBudget';

describe('getFullBudgetObject function', () => {
  test('should return an object with ES6 method properties', () => {
    const income = 20;
    const gdp = 50;
    const capita = 10;

    const fullBudget = getFullBudgetObject(income, gdp, capita);

    expect(typeof fullBudget.getIncomeInDollars).toBe('function');
    expect(typeof fullBudget.getIncomeInEuros).toBe('function');

    // Test the functionality of the methods
    expect(fullBudget.getIncomeInDollars(income)).toBe('$20');
    expect(fullBudget.getIncomeInEuros(income)).toBe('20 euros');
  });
});
