// 03-modules.js

// Importing the names from 04-names.js
const names = require("./04-names.js");

// Importing the greet function from 05-utils.js
const greet = require("./05-utils.js");

// Importing data from 06-alternative-flavor.js
const data = require("./06-alternative-flavor.js");

// Importing 07-mind-grenade.js (which will execute code on load)
require("./07-mind-grenade.js");

// Using the imported modules
greet(names.person1);
greet(names.person2);
console.log(data);

// How to test:
// Type in the terminal: % node 03-modules.js.
// Expected output:
// 💥 Boom! Mind Grenade Exploded on November 8, 2024!
// Hello, Alice!
// Hello, Bob!
// { food: [ 'Pizza', 'Pasta' ], myPerson: { name: 'Tetyana' } }

