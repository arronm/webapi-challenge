const express = require('express');

const db = require('../data/helpers/actionModel');
const validateActionId = require('../middleware/validateActionId');

const router = express.Router();
router.use(express.json());

// GET
// actions
// actions/:id


// PUT
// actions/:id


// DELETE
// actions/:id

module.exports = router;
