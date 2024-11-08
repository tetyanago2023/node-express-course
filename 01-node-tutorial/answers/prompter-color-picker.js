// prompter-color-picker.js
// This script will prompt the user to pick a color from a list of colors

// Import built-in http module and built-in querystring module
const http = require('http');
const { parse } = require('querystring');

let chosenColor = "white"; // Default background color

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        // Parse the submitted form data
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const data = parse(body);
            // Update the chosen color based on user input
            if (data.color) {
                chosenColor = data.color;
            }

            // Respond with the form and apply the chosen color as background
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
        <body style="background-color: ${chosenColor};">
          <form method="POST">
            <label for="color">Choose a background color:</label>
            <select name="color" id="color">
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
            </select>
            <button type="submit">Set Background</button>
          </form>
          <p>Current background color: ${chosenColor}</p>
        </body>
      `);
        });
    } else {
        // Display the form for the first load or when the user refreshes
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
      <body style="background-color: ${chosenColor};">
        <form method="POST">
          <label for="color">Choose a background color:</label>
          <select name="color" id="color">
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </select>
          <button type="submit">Set Background</button>
        </form>
        <p>Current background color: ${chosenColor}</p>
      </body>
    `);
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// How to test:
// Run the file with % node prompter-color-picker.js
// Expected output:
// Server is running on http://localhost:3000
// Open a browser and navigate to http://localhost:3000.
// You should see a form with a dropdown to select a color (white, red, green, blue, yellow) and button "Set Background".
// The background color of the page will change based on the selected color.
// You can select a color and click the "Set Background" button to change the background color.
// To stop the server, press Ctrl + C in the terminal.