const express = require('express');
const bookRoutes = require("./routes/books");

const app = express();

app.use("/books", bookRoutes);

// Start server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});