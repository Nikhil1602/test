const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Server is created");

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.end(`
            <form action="/message" method="POST">
                <label>Name:</label>
                <input type="text" name="username"></input>
                <button type="submit">Add</button>
            </form>
        `)
    } else {
        if (req.url === "/message") {

            res.setHeader("Content-Type", "text/html");

            let dataChunks = [];
            req.on("data", (chunks) => {
                dataChunks.push(chunks);
            });

            req.on("end", () => {

                let combinedBuffer = Buffer.concat(dataChunks);
                let value = combinedBuffer.toString().split("=")[1];

                fs.writeFile("formValues.txt", value, (err) => {
                    res.statusCode = 302;
                    res.setHeader("Location", "/");
                    res.end();
                });

            })
        }
    }
});

server.listen(3000, () => {
    console.log("Listening on port 3000...");
});