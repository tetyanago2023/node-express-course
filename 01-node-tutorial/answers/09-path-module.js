// 09-path-module.js

// Load the built-in 'path' module
const path = require('path');

// Join a sequence of strings into a file path starting from the root
const filePath = path.join('/', 'Users', 'JohnSmith', 'node-express-course', '01-node-tutorial', 'answers');

// Print the joined file path
console.log('Joined path:', filePath);

// Print the base name of the file path
console.log('Base name:', path.basename(filePath));

// Print the absolute path of the file path
console.log('Absolute path:', path.resolve(__dirname, 'content', 'subfolder', 'test.txt'));

// How to test:
// Type in the terminal: % node 08-os-module.js.
// Expected output:
// Users/JohnSmith/node-express-course/01-node-tutorial/answers
// Base name: answers
// Absolute path: /Users/JohnSmith/node-express-course/01-node-tutorial/answers
