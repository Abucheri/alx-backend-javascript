import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userObj = {
    status: 'pending',
    value: '',
  };
  const photoObj = {
    status: 'pending',
    value: '',
  };
  try {
    const signupObj = await signUpUser(firstName, lastName);
    userObj.status = 'fulfilled';
    userObj.value = signupObj;
  } catch (error) {
    userObj.status = 'rejected';
    userObj.value = error.toString();
  }
  try {
    const uploadObj = await uploadPhoto(fileName);
    photoObj.status = 'fulfilled';
    photoObj.value = uploadObj;
  } catch (error) {
    photoObj.status = 'rejected';
    photoObj.value = error.toString();
  }
  return [userObj, photoObj];
}
