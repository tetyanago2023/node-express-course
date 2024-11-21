// app_lesson_4_logger.js

// Please find instructions on how to run and how to test Lesson 4 part "Logger" (not Lesson 3!!!) code in the `README.md` file.

console.log('Express Tutorial Lesson 4 logger');

const express = require('express');
const app = express();
const PORT = 3000;
const logger = require('./logger');

// Middleware inner function: logger
const innerLogger = (req, res, next) => {
    const currentTime = new Date().getFullYear();
    const fullUrl = req.originalUrl; // Use req.originalUrl for the full path
    console.log(`innerLogger function: Year: [${currentTime}] method: ${req.method} request to "${fullUrl}" route`);
    next();
};

// Middleware inner function: loggerAboutContact
const innerLoggerAboutContact = (req, res, next) => {
    const currentTime = new Date().getFullYear();
    const fullUrl = req.originalUrl; // Use req.originalUrl for the full path
    console.log(`innerLoggerAboutContact function. Year: [${currentTime}] method: ${req.method} request to "${fullUrl}" route`);
    next();
};

// Use inner innerLoggerAboutContact middleware for the about and contact path
app.use(['/about', '/contact'], innerLoggerAboutContact);
// Use outer logger for the all paths
app.use(logger);

// Use inner logger middleware for the root path
app.get('/', innerLogger, (req, res) => {
    res.send('Hello, World! This is the home page.');
});

// Use inner innerLoggerAboutContact middleware for the about and contact path
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
    res.send('This is the contact page.');
});

// Use outer logger middleware for the offers path
app.get('/offers', (req, res) => {
    res.send('This is the offers page.');
});

// Start the server on port 3000 and log a message to indicate that it's running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
