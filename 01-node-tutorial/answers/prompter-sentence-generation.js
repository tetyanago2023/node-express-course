//prompter-sentence-generation.js

// Import built-in http module and built-in querystring module

const http = require('http');
const { parse } = require('querystring');

// Initialize variables to store user inputs and the generated story
let noun = "";
let adjective = "";
let verb = "";
let story = "Fill out the form to create a story!";

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const data = parse(body);

            // Check if the clear button was clicked
            if (data.clear) {
                // Reset the story to its default message
                story = "Fill out the form to create a story!";
            } else if (data.noun && data.adjective && data.verb) {
                // Update variables with user inputs and create the story
                noun = data.noun;
                adjective = data.adjective;
                verb = data.verb;
                story = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} all day long.`;
            }

            // Send the response with the updated form and story
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
        <body>
          <form method="POST">
            <label for="noun">Enter a noun:</label>
            <input type="text" name="noun" id="noun" required>
            <br>
            <label for="adjective">Enter an adjective:</label>
            <input type="text" name="adjective" id="adjective" required>
            <br>
            <label for="verb">Enter a verb:</label>
            <input type="text" name="verb" id="verb" required>
            <br>
            <button type="submit">Create Story</button>
          </form>

          <form method="POST">
            <button type="submit" name="clear" value="true">Clear Story</button>
          </form>

          <p>${story}</p>
        </body>
      `);
        });
    } else {
        // Display the form on initial load or refresh
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
      <body>
        <form method="POST">
          <label for="noun">Enter a noun:</label>
          <input type="text" name="noun" id="noun" required>
          <br>
          <label for="adjective">Enter an adjective:</label>
          <input type="text" name="adjective" id="adjective" required>
          <br>
          <label for="verb">Enter a verb:</label>
          <input type="text" name="verb" id="verb" required>
          <br>
          <button type="submit">Create Story</button>
        </form>

        <form method="POST">
          <button type="submit" name="clear" value="true">Clear Story</button>
        </form>

        <p>${story}</p>
      </body>
    `);
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// How to test:
// Type in the terminal: node prompter-sentence-generation.js
// Expected output:
// Server is running on http://localhost:3000
// Open a browser and navigate to http://localhost:3000.
// You will see a form with three input fields: noun, adjective, and verb.
// Enter a noun, adjective, and verb, then click the "Create Story" button.
// The page will display a story with the user's inputs.
// You can also click the "Clear Story" button to reset the story.
// You can refresh the page to create a new story.
// To stop the server, press Ctrl + C in the terminal.
