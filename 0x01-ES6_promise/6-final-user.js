import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Function to handle profile signup by calling signUpUser and uploadPhoto functions.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file to be uploaded.
 * @returns {Promise} - A Promise that resolves with an array of objects
 * representing the status and value/error of each Promise.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ];

  return Promise.allSettled(promises).then((results) => {
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason
    }));
  });
}
