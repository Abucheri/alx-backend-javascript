// 2-then.test.js

// Importing the function to be tested
import handleResponseFromAPI from './2-then';

// Describe block to group related tests
describe('handleResponseFromAPI', () => {
    // Test case for resolving Promise
    it('should resolve with status 200 and body "success" and log to console', async () => {
        // Mocking a resolved Promise
        const promise = Promise.resolve();
        // Spy on console.log to check if it's called with the expected message
        const consoleSpy = jest.spyOn(console, 'log');
        // Call the function with the mocked Promise
        const result = await handleResponseFromAPI(promise);
        // Assert that console.log was called with the expected message
        expect(consoleSpy).toHaveBeenCalledWith('Got a response from the API');
        // Assert that the function returns the expected object
        expect(result).toEqual({ status: 200, body: 'success' });
    });

    // Test case for rejecting Promise
    it('should reject with an empty Error object and log to console', async () => {
        // Mocking a rejected Promise
        const promise = Promise.reject();
        // Spy on console.log to check if it's called with the expected message
        const consoleSpy = jest.spyOn(console, 'log');
        // Call the function with the mocked Promise
        const result = await handleResponseFromAPI(promise);
        // Assert that console.log was called with the expected message
        expect(consoleSpy).toHaveBeenCalledWith('Got a response from the API');
        // Assert that the function returns an empty Error object
        expect(result).toBeInstanceOf(Error);
    });
});
