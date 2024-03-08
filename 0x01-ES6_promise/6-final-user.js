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
export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason),
      }))
    ));
}
