// 4-payment.test.js - Test suite for sendPaymentRequestToApi function

const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with correct arguments and log the correct message', () => {
        // Stubbing Utils.calculateNumber to always return 10
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        // Creating a spy on console.log
        const consoleLogSpy = sinon.spy(console, 'log');
        
        // Calling the sendPaymentRequestToApi function
        sendPaymentRequestToApi(100, 20);

        // Verifying that Utils.calculateNumber was called with correct arguments
        assert(calculateNumberStub.calledWithExactly('SUM', 100, 20));
        // Verifying that console.log was called with the correct message
        assert(consoleLogSpy.calledWithExactly('The total is: 10'));

        // Restoring the stub and spy
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});
