// write-with-promises-await.js

// Import the writeFile and readFile functions from fs.promises
// This gives us access to Promise-based versions of file system functions
const { writeFile, readFile } = require("fs").promises;

// Define an async function called writer, which writes three lines to a file
async function writer() {
    try {
        // Write "Line 1" to a new file named temp.txt
        await writeFile("temp.txt", "Line 1\n");

        // Append "Line 2" to temp.txt. Using { flag: 'a' } to prevent overwriting
        await writeFile("temp.txt", "Line 2\n", { flag: 'a' });

        // Append "Line 3" to temp.txt. Again, { flag: 'a' } ensures appending mode
        await writeFile("temp.txt", "Line 3\n", { flag: 'a' });

        // Log a success message to indicate the file was written successfully
        console.log("File written successfully!");
    } catch (error) {
        // Catch and log any errors that occur during the write process
        console.error("Error writing to file:", error);
    }
}

// Define an async function called reader, which reads the contents of temp.txt
async function reader() {
    try {
        // Read the contents of temp.txt with UTF-8 encoding
        const data = await readFile("temp.txt", "utf-8");

        // Log the file contents to the console
        console.log("File contents:\n", data);
    } catch (error) {
        // Catch and log any errors that occur during the read process
        console.error("Error reading from file:", error);
    }
}

// Define an async function readWrite to call writer and reader in sequence
// Ensures that writer completes before reader starts
async function readWrite() {
    await writer();  // First, write to the file
    await reader();  // Then, read from the file
}

// Execute the readWrite function to run the code
readWrite();

// How to test:
// Type in the terminal in the `01-node-tutorial/answers`: % node write-with-promises-await.js`.
// Expected output:
// File written successfully!
// File contents:
// Line 1
// Line 2
// Line 3
// If you run the command again, you will see the same output because the file is not overwritten.
// If you want to overwrite the file, you can delete the file and run the command again.
// To delete the file, type in the terminal in the `01-node-tutorial/answers`: % rm temp.txt`.
