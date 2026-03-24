const express = require('express');

const app = express();

// Middleware to parse JSON (useful for POST requests)
app.use(express.json());

// GET /orders
app.get('/orders', (req, res) => {
    res.send('Here is the list of all orders.');
});

// POST /orders
app.post('/orders', (req, res) => {
    res.send('A new order has been created.');
});

// GET /users
app.get('/users', (req, res) => {
    res.send('Here is the list of all users.');
});

// POST /users
app.post('/users', (req, res) => {
    res.send('A new user has been added.');
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


// Deliverables:

// Create a server using Express that listens on port 3000 and handles the following endpoints with appropriate responses:
// GET /orders - Respond with "Here is the list of all orders."
// POST /orders - Respond with "A new order has been created."
// GET /users - Respond with "Here is the list of all users."
// POST /users - Respond with "A new user has been added."
// Requirements:
// Test each endpoint to confirm it works as expected when accessed via a browser (for GET) or a tool like Postman (for POST).
// Use console.log to indicate when the server is successfully running (e.g., "Server is running on http://localhost:3000").
// Test your routes using Postman or the browser to ensure everything works correctly.