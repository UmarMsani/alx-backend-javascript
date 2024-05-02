// 6-payment_token.js - Module for getting payment token from API

function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // Reject the promise if success is false
            reject(new Error('Unsuccessful response from the API'));
        }
    });
}

// Exporting the getPaymentTokenFromAPI function
module.exports = getPaymentTokenFromAPI;
