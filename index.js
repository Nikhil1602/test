const express = require('express');
const orderRoutes = require("./routes/orders");
const productRoutes = require("./routes/products");

const app = express();

app.use("/orders", orderRoutes);
app.use("/products", productRoutes);

// Start server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});