import getNeighborhoodsList from './2-arrow';

describe('getNeighborhoodsList', () => {
  let neighborhoodsList;

  beforeEach(() => {
    neighborhoodsList = new getNeighborhoodsList();
  });

  test('addNeighborhood method should add a new neighborhood', () => {
    const initialNeighborhoods = neighborhoodsList.sanFranciscoNeighborhoods.slice(); // Copy initial neighborhoods

    // Add a new neighborhood
    const newNeighborhood = 'Noe Valley';
    const updatedNeighborhoods = neighborhoodsList.addNeighborhood(newNeighborhood);

    // Check if the new neighborhood is added to the list
    expect(updatedNeighborhoods).toContain(newNeighborhood);
    // Check if the original neighborhoods list is not modified
    expect(updatedNeighborhoods).toEqual(expect.arrayContaining(initialNeighborhoods));
  });
});
