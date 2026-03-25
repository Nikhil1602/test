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

// Deliverables
// A productService.js file containing logic for:
// Getting all products
// Getting a single product by ID
// Adding a new product
// Updated productController.js file calling the service functions.
// Verified endpoints using Postman:
// GET /products → "Fetching all products"
// GET /products/1 → "Fetching product with ID: 1"
// POST /products → "Adding a new product"