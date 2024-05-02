// api.js - Express server setup
const express = require('express');

const app = express();
const port = 7865;

// Route GET / returns the message "Welcome to the payment system"
app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

// Route GET /cart/:id returns payment methods for cart :id
app.get('/cart/:id([0-9]+)', (request, response) => {
    response.send(`Payment methods for cart ${request.params.id}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;
