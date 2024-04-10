// 1-promise.test.js

// Importing the function to be tested
import getFullResponseFromAPI from './1-promise';

// Describe block to group related tests
describe('getFullResponseFromAPI', () => {
    // Test case for success scenario
    it('should resolve with status 200 and body "Success" when success is true', async () => {
        // Call the function with success as true
        const response = await getFullResponseFromAPI(true);
        // Assert that the response matches the expected object
        expect(response).toEqual({ status: 200, body: 'Success' });
    });

    // Test case for failure scenario
    it('should reject with an error message when success is false', async () => {
        // Call the function with success as false
        await expect(getFullResponseFromAPI(false)).rejects.toThrowError('The fake API is not working currently');
    });
});
