import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName).then(result => ({ status: 'fulfilled', value: result })),
    uploadPhoto(fileName).catch(error => ({ status: 'rejected', value: error }))
  ];

  return Promise.all(promises);
}
