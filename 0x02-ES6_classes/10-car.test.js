import Car from './10-car.js';

describe('Car', () => {
  it('should create a clone of the car', () => {
    const car1 = new Car('Nissan', 'Turbo', 'Pink');
    const car2 = car1.cloneCar();

    expect(car1).toEqual(car2);
    expect(car1).toBeInstanceOf(Car);
    expect(car2).toBeInstanceOf(Car);
    expect(car1 === car2).toBe(false);
  });
});
