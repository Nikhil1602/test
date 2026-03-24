const http = require('http');
const { requestHandler } = require('./routes');

const server = http.createServer(requestHandler);

server.listen(3000, () => {
    console.log("Listening on port 3000...");
})