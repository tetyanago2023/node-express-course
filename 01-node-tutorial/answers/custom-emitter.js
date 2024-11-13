// custom-emitter.js

// Import the EventEmitter class from the 'events' module
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Example 1: Timer-based Event
// This emits a "timerEvent" every 2 seconds with a message parameter
setInterval(() => {
    emitter.emit("timerEvent", "Timer event triggered!");
}, 2000);

// Event handler for "timerEvent"
emitter.on("timerEvent", (msg) => {
    console.log("[Timer Event]:", msg);
});

// Example 2: Chain Events
// Emit "startEvent", which triggers "processEvent" handler
emitter.on("startEvent", () => {
    console.log("[Start Event]: Initializing process...");
    emitter.emit("processEvent", "Processing data...");
});

// Event handler for "processEvent" that emits "completeEvent"
emitter.on("processEvent", (msg) => {
    console.log("[Process Event]:", msg);
    emitter.emit("completeEvent", "Process completed!");
});

// Event handler for "completeEvent"
emitter.on("completeEvent", (msg) => {
    console.log("[Complete Event]:", msg);
});

// Emit the "startEvent" to kick off the chain of events
emitter.emit("startEvent");

// Example 3: Async Event Handling with Promises
const waitForEvent = () => {
    return new Promise((resolve) => {
        // Wait for "asyncEvent" to be emitted, then resolve the promise
        emitter.on("asyncEvent", (msg) => resolve(msg));
    });
};

// Asynchronous function that waits for "asyncEvent"
const doAsyncWait = async () => {
    const msg = await waitForEvent();
    console.log("[Async Event]: We received:", msg);
};

// Call the async function to start waiting for the event
doAsyncWait();

// Emit "asyncEvent" after 3 seconds with a message
setTimeout(() => {
    emitter.emit("asyncEvent", "Hello from async event!");
}, 3000);

// How to test:
// Type in the terminal in the `01-node-tutorial/answers`: % node custom-emitter.js`.
// Expected output:
// [Start Event]: Initializing process...
// [Process Event]: Processing data...
// [Complete Event]: Process completed!
// [Timer Event]: Timer event triggered!
// [Timer Event]: Timer event triggered!
// [Async Event]: We received: Hello from async event!
// [Timer Event]: Timer event triggered!
// [Timer Event]: Timer event triggered!
// [Timer Event]: Timer event triggered!
// [Timer Event]: Timer event triggered!
// [Timer Event]: Timer event triggered!
//...
// The timer event will continue to trigger every 2 seconds.
// to stop the program, press Ctrl + C in the terminal.
