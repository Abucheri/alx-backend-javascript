const displayMessage = require('./0-console');

test('displayMessage prints the correct message', () => {
    console.log = jest.fn();
    displayMessage('Hello NodeJS!');
    expect(console.log).toHaveBeenCalledWith('Hello NodeJS!');
});
