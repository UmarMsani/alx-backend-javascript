/**
 * Function to upload a photo.
 * @param {string} fileName - The name of the file to be uploaded.
 * @returns {Promise} - A Promise that rejects with an Error.
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
