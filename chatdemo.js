const http = require('http');
const fs = require('fs');
const path = './data.txt';

const server = http.createServer((req, res) => {

    // Handle form submission
    if (req.method === 'POST') {

        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const input = decodeURIComponent(body.split('=')[1] || '');

            fs.readFile(path, 'utf-8', (err, data) => {
                let messages = [];

                if (!err && data) {
                    messages = data.split('\n').filter(Boolean);
                }

                // Add new message at the TOP
                messages.unshift(input);

                const updatedData = messages.join('\n');

                fs.writeFile(path, updatedData, (err) => {
                    if (err) throw err;

                    res.writeHead(302, { Location: '/' });
                    res.end();
                });
            });
        });

        return;
    }

    // Handle GET request
    fs.readFile(path, 'utf-8', (err, data) => {

        let messages = [];

        if (!err && data) {
            messages = data.split('\n').filter(Boolean);
        }

        const messageHTML = messages.length
            ? messages.map(msg => `<p>${msg}</p>`).join('')
            : '<p>undefined</p>';

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(`
            <h2>Messages:</h2>
            ${messageHTML}

            <hr/>

            <form method="POST">
                <input type="text" name="msg" placeholder="Enter message" required />
                <button type="submit">Send</button>
            </form>
        `);

    });

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});