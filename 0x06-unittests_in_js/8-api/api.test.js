// api.test.js - Test suite for api.js

const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index Page', () => {
    it('responds with status code 200', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('responds with correct message', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    // Add any additional tests here if needed
});
