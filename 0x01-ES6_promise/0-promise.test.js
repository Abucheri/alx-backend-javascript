// 0-promise.test.js

// Importing the function to be tested
import getResponseFromAPI from './0-promise';

// Describe block to group related tests
describe('getResponseFromAPI', () => {
    // Test case to check if the function returns a Promise
    it('should return a Promise', () => {
        // Calling the function
        const response = getResponseFromAPI();
        // Asserting that the response is an instance of Promise
        expect(response instanceof Promise).toBe(true);
    });

    // You can add more test cases here to test other aspects of the function
    // For example, you can test if the Promise resolves with the expected value
    // or if it rejects under certain conditions.
});
