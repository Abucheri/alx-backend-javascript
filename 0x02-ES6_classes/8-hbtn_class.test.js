// 8-hbtn_class.test.js
import HolbertonClass from './8-hbtn_class.js';

describe('HolbertonClass', () => {
  it('should return the size when cast into a Number', () => {
    const hc = new HolbertonClass(12, 'Mezzanine');
    expect(Number(hc)).toBe(12);
  });

  it('should return the location when cast into a String', () => {
    const hc = new HolbertonClass(12, 'Mezzanine');
    expect(String(hc)).toBe('Mezzanine');
  });
});
