import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName).then((result) => ({
      status: 'fulfilled',
      value: result,
    })).catch((error) => ({
      status: 'rejected',
      value: error,
    })),
    uploadPhoto(fileName).then((result) => ({
      status: 'fulfilled',
      value: result,
    })).catch((error) => ({
      status: 'rejected',
      value: error,
    })),
  ]);
}
