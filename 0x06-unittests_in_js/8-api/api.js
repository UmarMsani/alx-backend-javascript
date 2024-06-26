// api.js - Express server setup
const express = require('express');

// Create an instance of express called app
const app = express();
// Listen to port 7865 and log message to the console
const port = 7865;

app.listen(port, () => {
    console.log("API available on localhost port 7865");
});

// Route GET / returns the message "Welcome to the payment system"
app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

module.exports = app; // Exporting the express app
