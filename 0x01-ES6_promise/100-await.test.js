import asyncUploadUser from './100-await';
import { uploadPhoto, createUser } from './utils';

jest.mock('./utils', () => ({
  uploadPhoto: jest.fn(),
  createUser: jest.fn(),
}));

describe('asyncUploadUser function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return an object with photo and user responses when both promises resolve successfully', async () => {
    const photoResponse = { status: 200, body: 'photo-profile-1' };
    const userResponse = { firstName: 'Guillaume', lastName: 'Salva' };

    uploadPhoto.mockResolvedValueOnce(photoResponse);
    createUser.mockResolvedValueOnce(userResponse);

    const result = await asyncUploadUser();

    expect(result).toEqual({
      photo: photoResponse,
      user: userResponse,
    });
  });

  it('should return an object with both values set to null when any of the promises reject', async () => {
    uploadPhoto.mockRejectedValueOnce(new Error('Photo upload failed'));
    createUser.mockResolvedValueOnce({ firstName: 'Guillaume', lastName: 'Salva' });

    const result = await asyncUploadUser();

    expect(result).toEqual({
      photo: null,
      user: null,
    });
  });
});
