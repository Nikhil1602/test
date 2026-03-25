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

// Deliverables:
// Implement controllers to handle product logic.
// Update your routes to call the controller functions, improving the structure and maintainability of the product routes.
// Testing with Postman
// GET /products → Should return "Fetching all products"
// GET /products/1 → Should return "Fetching product with ID: 1"
// POST /products → Should return "Adding a new product"
// 💡 Make sure to use Postman to verify that your APIs work correctly!