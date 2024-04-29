/**
 * Prototype function to get a full response from a fake API.
 * @param {boolean} success - Indicates whether the API request is successful.
 * @returns {Promise} - A Promise that resolves or rejects based on the success parameter.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
