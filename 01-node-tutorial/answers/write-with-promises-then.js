// write-with-promises-then.js

// Import the writeFile and readFile functions from fs.promises
const { writeFile, readFile } = require("fs").promises;

// Write "Line 1" to temp.txt
writeFile("temp.txt", "Line 1\n")
    .then(() => {
        console.log("Line 1 written to file.");

        // Write "Line 2" to temp.txt in append mode
        return writeFile("temp.txt", "Line 2\n", { flag: 'a' });
    })
    .then(() => {
        console.log("Line 2 written to file.");

        // Write "Line 3" to temp.txt in append mode
        return writeFile("temp.txt", "Line 3\n", { flag: 'a' });
    })
    .then(() => {
        console.log("Line 3 written to file.");

        // Read the contents of temp.txt with UTF-8 encoding
        return readFile("temp.txt", "utf-8");
    })
    .then((data) => {
        // Log the contents of the file to the console
        console.log("File contents:\n", data);
    })
    .catch((error) => {
        // Log any errors that occur during the file operations
        console.log("An error occurred: ", error);
    });

// How to test:
// Type in the terminal in the `01-node-tutorial/answers`: % node write-with-promises-then.js`.
// Expected output:
// Line 1 written to file.
// Line 2 written to file.
// Line 3 written to file.
// File contents:
// Line 1
// Line 2
// Line 3
// If you run the command again, you will see the same output because the file is not overwritten.
// If you want to overwrite the file, you can delete the file and run the command again.
// // To delete the file, type in the terminal in the `01-node-tutorial/answers`: % rm temp.txt`.