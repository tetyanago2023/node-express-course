// 12-http.js

// Import built-in http module
const http = require('http');

// Create server and handle requests based on the URL
const server = http.createServer((req, res) => {
    // Check the URL and send different responses
    if (req.url === '/') {
        res.end('Hello, welcome to the home page!');
    } else if (req.url === '/about') {
        res.end('This is the about page.');
    } else if (req.url === '/contact') {
        res.end('Contact us via contact@example.com.');
    } else {
        res.end(`
    <h1>Oops!</h1>
    <p>The page you are looking for can't be found</p>
    <a href="/">Back Home</a>
    `)
    }
});

// Listen on port 3000, log a message to know that it is running
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Type in the terminal: node 12-http.js
// Expected output:
// Server is running on http://localhost:3000
// Open a browser and navigate to http://localhost:3000, http://localhost:3000/about, and http://localhost:3000/contact.
// You should see the corresponding responses for each URL:
// for http://localhost:3000 => 'Hello, welcome to the home page!'
// for http://localhost:3000/about => 'This is the about page.'
// for http://localhost:3000/contact => 'Contact us via contact@example.com.'.
// This server will respond to each of the specified URLs, and for any other URL, it will show a "Oops!"
// "The page you are looking for can't be found" message and link "Back Home".
// To stop the server, press Ctrl + C in the terminal.