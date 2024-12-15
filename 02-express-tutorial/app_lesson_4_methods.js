// app_lesson_4_methods.js

// Please find instructions on how to run and how to test Lesson 4 part "Methods" (not Lesson 3!!!) code in the `README.md` file.

console.log('Express Tutorial Lesson 4 methods');

const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
let { people } = require('./data');

// Middleware to parse request bodies
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // For JSON data

// GET endpoint for /api/v1/people
app.get('/api/v1/people', (req, res) => {
    res.json({ success: true, data: people });
});

// GET endpoint for a single person by ID
app.get('/api/v1/people/:id', (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }

    res.status(200).json({ success: true, data: person });
});

// POST endpoint for /api/v1/people
app.post('/api/v1/people', (req, res) => {
    const { name } = req.body; // Extract 'name' from the request body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide a name' });
    }

    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, data: newPerson });
});

// PUT endpoint to update a person's name
app.put('/api/v1/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id; ${id}` })
    }
    const newPerson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })

    res.status(200).json({ success: true, data: newPerson });
})

// PATCH endpoint to partially update a person's name
app.patch('/api/v1/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }

    if (name) {
        person.name = name;
    }

    res.status(200).json({ success: true, data: person });
});

app.delete('/api/v1/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${req.params.id}` });
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )

    res.status(200).json({ success: true, data: newPeople });
});

app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name.charAt(0).toUpperCase() + name.slice(1)}`);

    }

    return res.status(401).send('Please provide a name');
});


// Start the server on port 3000 and log a message to indicate that it's running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
