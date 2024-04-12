import EVCar from './100-evcar'; // Update the import path if necessary
import Car from './10-car'; // Import the Car class

describe('EVCar', () => {
  it('should create an EVCar instance with the correct properties', () => {
    const ec1 = new EVCar('Tesla', 'Turbo', 'Red', '250');
    expect(ec1).toHaveProperty('_brand', 'Tesla');
    expect(ec1).toHaveProperty('_motor', 'Turbo');
    expect(ec1).toHaveProperty('_color', 'Red');
    expect(ec1).toHaveProperty('_range', '250');
  });

  it('should return an instance of Car when cloneCar is called', () => {
    const ec1 = new EVCar('Tesla', 'Turbo', 'Red', '250');
    const ec2 = ec1.cloneCar();
    expect(ec2).toBeInstanceOf(Car); // Check if it's an instance of Car
  });
});
