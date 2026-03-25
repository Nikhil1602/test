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

// Your mission is to build a Node.js application that serves an HTML file in response to a GET request.
// Set up a server using express.
// Add a GET endpoint (e.g., /api/products) to handle GET requests.
// Use res.sendFile() to serve an HTML file from your project directory inside folder VIEW.
// Return a form with following attributes:
// Form Structure:
// The form should contain a label with the text "Product Name".
// The label's for attribute and the input's id attribute should both be set to product for consistency and accessibility.
// The form should include an input field where users can enter the product name. The input field should have the name attribute set to productName.
// The form should contain a submit button with the content "Add Product".