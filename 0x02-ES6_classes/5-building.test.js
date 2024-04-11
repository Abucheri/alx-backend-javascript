// 5-building.test.js
import Building from './5-building.js';

describe('Building', () => {
  it('should create a Building object with specified attributes', () => {
    const b = new Building(100);
    expect(b.sqft).toBe(100);
  });

  it('should throw an error if subclass does not override evacuationWarningMessage', () => {
    class TestBuilding extends Building {}
    expect(() => new TestBuilding(200)).toThrowError('Class extending Building must override evacuationWarningMessage');
  });

  it('should not throw an error if subclass overrides evacuationWarningMessage', () => {
    class TestBuilding extends Building {
      evacuationWarningMessage() {
        return 'Evacuate immediately!';
      }
    }
    expect(() => new TestBuilding(200)).not.toThrow();
  });
});
