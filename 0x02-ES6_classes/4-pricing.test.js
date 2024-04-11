// 4-pricing.test.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

describe('Pricing', () => {
  it('should create a Pricing object with specified attributes', () => {
    const currency = new Currency('EUR', 'Euro');
    const pricing = new Pricing(100, currency);
    expect(pricing.amount).toBe(100);
    expect(pricing.currency).toBe(currency);
  });

  it('should update amount using setter', () => {
    const pricing = new Pricing(100, new Currency('EUR', 'Euro'));
    pricing.amount = 200;
    expect(pricing.amount).toBe(200);
  });

  it('should update currency using setter', () => {
    const pricing = new Pricing(100, new Currency('EUR', 'Euro'));
    const newCurrency = new Currency('USD', 'Dollar');
    pricing.currency = newCurrency;
    expect(pricing.currency).toBe(newCurrency);
  });

  it('should throw TypeError when setting invalid amount', () => {
    const pricing = new Pricing(100, new Currency('EUR', 'Euro'));
    expect(() => { pricing.amount = 'invalid'; }).toThrow(TypeError);
  });

  it('should throw TypeError when setting invalid currency', () => {
    const pricing = new Pricing(100, new Currency('EUR', 'Euro'));
    expect(() => { pricing.currency = 'invalid'; }).toThrow(TypeError);
  });
});
