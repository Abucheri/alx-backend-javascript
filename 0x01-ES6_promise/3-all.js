import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(results => {
      const { body: photo } = results[0];
      const { firstName, lastName } = results[1];
      console.log(`${photo} ${firstName} ${lastName}`);
    })
    .catch(error => {
      console.log('Signup system offline');
    });
}
