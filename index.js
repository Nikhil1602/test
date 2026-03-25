const express = require('express');
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Student & Course Portal API!");
});

app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
app.use("/products", productRoutes);

app.use((req, res) => {
    res.status(404).send("Page not found");
})

// Start server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});

// Your mission is to build a Node.js application that serves an HTML file in response to a GET request. The goal is to create a simple and organized Node.js folder setup to integrate HTML using res.sendFile().
// Set up a server using express.
// Add a GET endpoint (e.g., /api/products) to handle GET requests.
// Use res.sendFile() to serve an HTML file from your project directory inside folder VIEW.
// Return the same statement that is returned by the instructor - "Fetching All Products"
// Keep your project organized and fun to explore!
// By the end, you’ll have a working example of how to integrate HTML with GET requests, making your server come alive with web content! 🌟