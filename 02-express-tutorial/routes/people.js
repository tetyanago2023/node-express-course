// people.js

const express = require('express');
const router = express.Router();

const {
    getPeople,
    getSinglePerson,
    addPerson,
    updatePerson,
    partiallyUpdateName,
    deletePerson,
} = require('../controllers/people');

// // Get endpoint for all people
// router.get('/', getPeople);
// // GET endpoint for a single person by ID
// router.get('/:id', getSinglePerson);
// // POST endpoint for /api/v1/people
// router.post('/', addPerson);
// // PUT endpoint to update a person's name
// router.put('/:id', updatePerson);
// // PATCH endpoint to partially update a person's name
// router.patch('/:id', partiallyUpdateName);
// router.delete('/:id', deletePerson);

router.route('/').get(getPeople).post(addPerson);
router.route('/:id').get(getSinglePerson).put(updatePerson).patch(partiallyUpdateName).delete(deletePerson)

module.exports = router;