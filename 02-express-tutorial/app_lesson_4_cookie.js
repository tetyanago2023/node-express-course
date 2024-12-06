// app_lesson_4_cookie.js

// Please find instructions on how to run and how to test Lesson 4 part "Cookie" (not Lesson 3!!!) code in the `README.md` file.

console.log('Express Tutorial Lesson 4 cookie');

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;
const auth = require('./authentication/auth')

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Auth middleware
app.use('/test', auth)

// POST /logon
app.post('/logon', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.cookie('name', name);
        res.status(201).json({ message: `Hi, ${name.charAt(0).toUpperCase() + name.slice(1)}` });
    } else {
        res.status(400).json({ error: 'Please provide a name.' });
    }
});

// DELETE /logoff
app.delete('/logoff', (req, res) => {
    res.clearCookie('name');
    res.status(200).json({ message: 'User logged off' });
});

// GET /test (requires authentication)
app.get('/test', (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user.charAt(0).toUpperCase() + req.user.slice(1)}!` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
