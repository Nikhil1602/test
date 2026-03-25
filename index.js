const express = require('express');
const courseRoutes = require("./routes/courses");
const studentRoutes = require("./routes/students");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Student & Course Portal API!");
});

app.use("/courses", courseRoutes);
app.use("/students", studentRoutes);

app.use((req, res) => {
    res.status(404).send("Page not found");
})

// Start server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});