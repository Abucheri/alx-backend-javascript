// 3-currency.test.js
import Currency from './3-currency.js';

describe('Currency', () => {
  it('should create a Currency object with specified attributes', () => {
    const currency = new Currency('$', 'Dollars');
    expect(currency.code).toBe('$');
    expect(currency.name).toBe('Dollars');
  });

  it('should update attributes using setters', () => {
    const currency = new Currency('$', 'Dollars');
    currency.code = 'EUR';
    currency.name = 'Euros';
    expect(currency.code).toBe('EUR');
    expect(currency.name).toBe('Euros');
  });

  it('should return attributes in the correct format', () => {
    const currency = new Currency('$', 'Dollars');
    expect(currency.displayFullCurrency()).toBe('Dollars ($)');
  });
});
