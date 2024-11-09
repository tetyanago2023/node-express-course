// 17-http-stream.js

// Import the built-in 'http' and 'fs' (file system) modules
var http = require('http');
var fs = require('fs');

// Create an HTTP server
http
    .createServer(function (req, res) {
        // Use a readable stream to handle large file content efficiently
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8');

        // When the file stream opens successfully, pipe its content to the HTTP response
        fileStream.on('open', () => {
            fileStream.pipe(res); // Pipes data directly to the client as it's read from the file
        });

        // Handle any errors that may occur while reading the file
        fileStream.on('error', (err) => {
            res.end(err); // End the response and send the error message to the client
        });
    })
    .listen(5000); // The server listens on port 5000 for incoming requests

// How to test:
// Type in the terminal in the `01-node-tutorial`: % node 17-http-stream.js`.
// Open a browser and navigate to http://localhost:5000.
// You should see the contents of the big.txt file displayed in the browser.
// To stop the server, press Ctrl + C in the terminal.
