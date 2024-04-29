/**
 * Function to handle responses from an API Promise.
 * @param {Promise} promise - The Promise to handle.
 * @returns {Promise} - A Promise with specified handlers.
 */
function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      console.error('Got an error from the API');
      return new Error();
    });
}

export default handleResponseFromAPI;
