// 08-os-module.js

// Import the os module
const os = require("os");

// Display the current user information
console.log("User Info:", os.userInfo());

// Display system uptime in seconds
console.log("System Uptime (seconds):", os.uptime());

// Display the operating system name
console.log("Operating System:", os.type());

// Display the release of the OS
console.log("OS Release:", os.release());

// Display the total and free system memory
console.log("Total Memory (bytes):", os.totalmem());
console.log("Free Memory (bytes):", os.freemem());

// Display information about the CPU cores
console.log("CPU Information:", os.cpus());

// Display the home directory of the current user
console.log("Home Directory:", os.homedir());

// Display the hostname
console.log("Hostname:", os.hostname());

// Display the network interfaces
console.log("Network Interfaces:", os.networkInterfaces());

// current OS info as an object
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);


// How to test:
// Type in the terminal: % node 08-os-module.js.
// Expected output - similar to this:
// User Info: UserInfo {
//   uid: 501,
//   gid: 20,
//   username: 'username',
//   homedir: '/Users/username',
//   shell: '/bin/zsh'
// }
// System Uptime (seconds): 12345
// Operating System: Darwin
// OS Release: 20.6.0
// Total Memory (bytes): 17179869184
// Free Memory (bytes): 123456789
// CPU Information: [
//   {
//     model: 'Intel(R) Core(TM) i5-1234 CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 12345, nice: 0, sys: 12345, idle: 12345, irq: 0 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-1234 CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 12345, nice: 0, sys: 12345, idle: 12345, irq: 0 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-1234 CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 12345, nice: 0, sys: 12345, idle: 12345, irq: 0 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-1234 CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 12345, nice: 0, sys: 12345, idle: 12345, irq: 0 }
//   }
// ]
// Home Directory: /Users/username
// Hostname: MacBook-Pro
// Network Interfaces: {
//   lo0: [
//     {
//       address: '
//       netmask: '
//       family: 'IPv6',
//       mac: '00:00:00:00:00:00',
//       internal: true,
//       cidr: '...'
//     },
//     {
//       address: '
//       netmask: '
//       family: 'IPv4',
//       mac: '00:00:00:00:00:00',
//       internal: true,
//       cidr: '...'
//     },
//     {
//       address: '
//       netmask: '
//       family: 'IPv4',
//       mac: '00:00:00:00:00:00',
//       internal: false,
//       cidr: '...'
//     }
//   ],
//   ...
// }
// { name: 'Darwin', release: '20.6.0', totalMem: 17179869184, freeMem: 123456789 }



