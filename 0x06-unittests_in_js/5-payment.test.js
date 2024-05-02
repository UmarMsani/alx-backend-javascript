// 5-payment.test.js - Test suite for sendPaymentRequestToApi function

const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;

    beforeEach(() => {
        // Creating a spy on console.log before each test
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restoring the spy after each test
        consoleLogSpy.restore();
    });

    it('should log the correct message when called with totalAmount 100 and totalShipping 20', () => {
        // Calling sendPaymentRequestToApi with totalAmount 100 and totalShipping 20
        sendPaymentRequestToApi(100, 20);

        // Verifying that console.log was called with the correct message
        assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
    });

    it('should log the correct message when called with totalAmount 10 and totalShipping 10', () => {
        // Calling sendPaymentRequestToApi with totalAmount 10 and totalShipping 10
        sendPaymentRequestToApi(10, 10);

        // Verifying that console.log was called with the correct message
        assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
    });
});
