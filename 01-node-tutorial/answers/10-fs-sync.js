// 10-fs-sync.js

// Import the required functions from the built-in fs and path modules
const { writeFileSync, readFileSync, mkdirSync } = require('fs');
const path = require('path');

// Log the start of the script
console.log('Start');

// Define the file path in the temporary directory
// const tempDir = path.join(__dirname, 'answers', 'temporary'); // if we are currently in the 01-node-tutorial directory
const tempDir = path.join(__dirname, 'temporary'); // if we are currently in the 01-node-tutorial/answers directory
const filePath = path.join(tempDir, 'fileA.txt');

// Create the temporary directory if it doesn't exist
try {
    mkdirSync(tempDir, { recursive: true });
} catch (err) {
    if (err.code !== 'EEXIST') {
        console.error('Error creating directory:', err);
    }
}

try {
    // Write the first line to the file (create it)
    writeFileSync(filePath, 'This is the first line.\n');

    // Append additional lines using the "append" flag
    writeFileSync(filePath, 'This is the second line.\n', { flag: 'a' });
    writeFileSync(filePath, 'This is the third line.\n', { flag: 'a' });

    // Read the contents of the file
    const fileContents = readFileSync(filePath, 'utf8');

    // Log the contents to the console
    console.log('File contents:\n', fileContents);
} catch (error) {
    console.error('Error writing or reading the file:', error);
}

// Log the end of the script
console.log('Done with this task');

// How to test:
// Type in the terminal: % node 10-fs-sync.js.
// Expected output:
// Start
// File contents:
// This is the first line.
// This is the second line.
// This is the third line.
// Done with this task
// Type in the terminal: % ls answers/temporary and check the fileA.txt file presence and its content.
// FileA.txt content:
// This is the first line.
// This is the second line.
// This is the third line.
// Type in the terminal: % rm temporary/fileA.txt to remove the fileA.txt file.
// Type in the terminal: % rmdir temporary to remove the temporary directory.
//Type in the terminal: % 10-fs-sync.js to test the program again.
