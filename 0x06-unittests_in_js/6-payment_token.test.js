// 6-payment_token.test.js - Test suite for getPaymentTokenFromAPI function

const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the correct data when success is true', (done) => {
        // Calling getPaymentTokenFromAPI with success true
        getPaymentTokenFromAPI(true)
            .then((response) => {
                // Verifying that the response data is correct
                assert.deepStrictEqual(response, { data: 'Successful response from the API' });
                // Calling done to signal that the test is completed
                done();
            })
            .catch((error) => {
                // If there's an error, fail the test
                done(error);
            });
    });
});
