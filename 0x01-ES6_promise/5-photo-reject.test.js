// 5-photo-reject.test.js

import uploadPhoto from './5-photo-reject';

describe('uploadPhoto', () => {
  it('should return a rejected promise with an error message', () => {
    const filename = 'guillaume.jpg';
    const errorMessage = `${filename} cannot be processed`;

    return expect(uploadPhoto(filename)).rejects.toThrow(errorMessage);
  });
});
