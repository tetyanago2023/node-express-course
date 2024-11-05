// 02-globals.js

// Print the directory name using __dirname
console.log("Current directory:", __dirname);

// Print the value of the custom environment variable MY_VAR
console.log("Environment variable MY_VAR:", process.env.MY_VAR);

// Print the filename using __filename
console.log("Current file:", __filename);

// Print the process ID using process.pid
console.log("Process ID:", process.pid);

// Print the Node version using process.version
console.log("Node version:", process.version);

// Print the platform using process.platform
console.log("Platform:", process.platform);

// Print the architecture using process.arch
console.log("Architecture:", process.arch);

// Print the memory usage using process.memoryUsage()
console.log("Memory usage:", process.memoryUsage());

// Print the uptime using process.uptime()
console.log("Uptime:", process.uptime());

// Print the process title using process.title
console.log("Process title:", process.title);

// Print the process arguments using process.argv
console.log("Process arguments:", process.argv);

// How to test:
// Type in the terminal: % export MY_VAR='Hi there!' $$ node 02-globals.js.
// Expected output - similar to this:
// Current directory: /Users/username/01-node-tutorial/answers
// Environment variable MY_VAR: Hi there!
// Current file: /Users/username/01-node-tutorial/answers/02-globals.js
// Process ID: 12345
// Node version: v14.15.4
// Platform: darwin
// Architecture: x64
// Memory usage: {
//   rss: 21233664,
//   heapTotal: 5767168,
//   heapUsed: 3354624,
//   external: 1024
// }
// Uptime: 0.123
// Process title: node
// Process arguments: [
//   '/usr/local/Cellar/node/21.1.0/bin/node',
//   '/Users/username/node-express-course/01-node-tutorial/answers/02-globals.js'
// ]


