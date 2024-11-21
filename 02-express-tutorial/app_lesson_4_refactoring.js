// app_lesson_4_refactoring.js

// Please find instructions on how to run and how to test Lesson 4 part "Refactoring" (not Lesson 3!!!) code in the `README.md` file.

console.log('Express Tutorial Lesson 4 refactoring');

const express = require('express');
const app = express();
const PORT = 3000;

const people = require('./routes/people');
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({extended: false}))

// parse json
app.use(express.json())

app.use('/api/v1/people', people)
app.use('/login', auth)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
