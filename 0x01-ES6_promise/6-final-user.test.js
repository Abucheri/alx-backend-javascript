// 6-final-user.test.js

import handleProfileSignup from './6-final-user';

describe('handleProfileSignup', () => {
  it('should return an array of objects with status and value/error', async () => {
    const firstName = 'Bob';
    const lastName = 'Dylan';
    const fileName = 'bob_dylan.jpg';

    const result = await handleProfileSignup(firstName, lastName, fileName);

    expect(result).toEqual([
      { status: 'fulfilled', value: { firstName: firstName, lastName: lastName } },
      { status: 'rejected', value: new Error(`${fileName} cannot be processed`) }
    ]);
  });
});
