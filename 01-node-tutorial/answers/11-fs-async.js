// 11-fs-async.js

// Import the required functions from the built-in fs and path modules
const { writeFile } = require("fs");
const path = require("path");

// Ensure the output directory exists
const dir = path.join(__dirname, 'temporary');
const fs = require('fs');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

console.log("at start");

// Write the first line with "write" mode (default)
writeFile("./temporary/fileB.txt", "This is line 1\n", { flag: "w" }, (err) => {
    console.log("at point 1");
    if (err) {
        console.log("This error happened:", err);
    } else {
        // Write the second line with "append" mode
        writeFile("./temporary/fileB.txt", "This is line 2\n", { flag: "a" }, (err) => {
            console.log("at point 2");
            if (err) {
                console.log("This error happened:", err);
            } else {
                // Write the third line with "append" mode
                writeFile("./temporary/fileB.txt", "This is line 3\n", { flag: "a" }, (err) => {
                    console.log("at point 3");
                    if (err) {
                        console.log("This error happened:", err);
                    } else {
                        console.log("All lines written successfully.");
                    }
                });
            }
        });
    }
});

console.log("at end");


// How to test:
// Type in the terminal: % node 11-fs-async.js.
// Expected output:
// at start
// at end (appears before the callbacks, showing the non-blocking nature of writeFile
// at point 1
// at point 2
// at point 3
// Finished writing all lines.
//
// FileB.txt content:
// This is line 1
// This is line 2
// This is line 3
//
// Type in the terminal: % rm temporary/fileB.txt to remove the fileB.txt file.
// Type in the terminal: rm temporary/fileA.txt to remove the fileA.txt file (if this file is still present
// in the directory after `% node 10-fs-sync.js` running).
// Type in the terminal: % rmdir temporary to remove the temporary directory.
// Type in the terminal: % node 11-fs-async.js to test the program again.





