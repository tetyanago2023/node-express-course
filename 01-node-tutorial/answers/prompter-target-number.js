// prompter-target-number.js

// Import built-in http module and built-in querystring module
const http = require('http');
const { parse } = require('querystring');

// Initialize the target number and feedback message
let targetNumber = Math.floor(Math.random() * 100) + 1;
let feedback = "Make a guess between 1 and 100!";

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        // Parse the submitted form data
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const data = parse(body);

            if (data.guess) {
                const userGuess = parseInt(data.guess, 10); // Convert guess to an integer

                // Compare the guess to the target number
                if (userGuess < targetNumber) {
                    feedback = "Too low! Try again.";
                } else if (userGuess > targetNumber) {
                    feedback = "Too high! Try again.";
                } else {
                    feedback = "Correct! You guessed the number!";
                    targetNumber = Math.floor(Math.random() * 100) + 1; // Reset for a new game
                }
            }

            // Send the response with the feedback and form
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
        <body>
          <form method="POST">
            <label for="guess">Guess the number (1-100):</label>
            <input type="number" name="guess" id="guess" min="1" max="100" required>
            <button type="submit">Submit Guess</button>
          </form>
          <p>${feedback}</p>
        </body>
      `);
        });
    } else {
        // Display the form on the initial load or on refresh
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
      <body>
        <form method="POST">
          <label for="guess">Guess the number (1-100):</label>
          <input type="number" name="guess" id="guess" min="1" max="100" required>
          <button type="submit">Submit Guess</button>
        </form>
        <p>${feedback}</p>
      </body>
    `);
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// How to test:
// Run the file with % node prompter-target-number.js
// Expected output:
// Server is running on http://localhost:3000
// Open a browser and navigate to http://localhost:3000.
// You should see a form to guess a number between 1 and 100 and a feedback message.
// Try guessing the number and see the feedback change accordingly.
// The target number is reset after each correct guess.
// To stop the server, press Ctrl + C in the terminal.
