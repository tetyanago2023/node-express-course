// people.js

let { people } = require('../data');

const getPeople = (req, res) => {
    res.json({ success: true, data: people });
};

const getSinglePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }

    res.status(200).json({ success: true, data: person });
};

const addPerson = (req, res) => {
    const { name } = req.body; // Extract 'name' from the request body
    if (!name) {
        // If no 'name' is provided, return an error
        return res.status(400).json({ success: false, msg: 'Please provide a name' });
    }

    // Add the new entry to the 'people' array
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    // Return a success response with the new entry
    res.status(201).json({ success: true, data: newPerson });
};


const updatePerson = (req, res) => {
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
    return res.status(200).json({ success: true, data: newPerson })
};

const partiallyUpdateName = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }

    if (name) {
        person.name = name;
    }

    return res.status(200).json({ success: true, data: person });
};

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
};

module.exports = {
    getPeople,
    getSinglePerson,
    addPerson,
    updatePerson,
    partiallyUpdateName,
    deletePerson
};
