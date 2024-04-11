// 6-sky_high.test.js
import SkyHighBuilding from './6-sky_high.js';

describe('SkyHighBuilding', () => {
  it('should create a SkyHighBuilding object with specified attributes', () => {
    const building = new SkyHighBuilding(140, 60);
    expect(building.sqft).toBe(140);
    expect(building.floors).toBe(60);
  });

  it('should override the evacuationWarningMessage method', () => {
    const building = new SkyHighBuilding(140, 60);
    expect(building.evacuationWarningMessage()).toBe('Evacuate slowly the 60 floors');
  });
});
