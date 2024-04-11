// 4-user-promise.test.js

import signUpUser from './4-user-promise';

describe('signUpUser', () => {
  it('should return a resolved promise with firstName and lastName', () => {
    const firstName = 'Bob';
    const lastName = 'Dylan';

    return signUpUser(firstName, lastName).then(result => {
      expect(result).toEqual({
        firstName: firstName,
        lastName: lastName
      });
    });
  });
});
