// 4-payment.js - Module for sending payment requests to an API

const Utils = require('./utils');

// Function to send payment request to API
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Calculating the sum of totalAmount and totalShipping using Utils.calculateNumber
    const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    // Logging the total amount
    console.log(`The total is: ${sum}`);
}

// Exporting the sendPaymentRequestToApi function
module.exports = sendPaymentRequestToApi;
