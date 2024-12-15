// auth.js

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name.charAt(0).toUpperCase() + name.slice(1)}`);

    }

    res.status(401).send('Please Provide Credentials');
})

module.exports = router;
