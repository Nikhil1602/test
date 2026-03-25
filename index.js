const express = require('express');

const app = express();

app.get('/welcome/:username', (req, res) => {
    const { username } = req.params;
    const { role } = req.query;

    res.send(`Welcome ${username}, your role is ${role}`);
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});