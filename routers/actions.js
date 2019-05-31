const express = require('express');

const db = require('../data/helpers/actionModel');
const validateActionId = require('../middleware/validateActionId');

const router = express.Router();
router.use(express.json());

// GET
// actions
router.get('/', async (req, res) => {
  try {
    const actions = await db.get();
    res.json(actions);
  } catch (error) {
    const hash = Math.random().toString(36).substring(2);
    console.log(`${hash}: ${error}`);
    res.status(500).json({
      message: `Unknown Server Error: Reference ${hash}`,
    });
  }
});

// actions/:id
router.get('/:id', validateActionId, async (req, res) => {
  try {
    res.json(req.action);
  } catch (error) {
    const hash = Math.random().toString(36).substring(2);
    console.log(`${hash}: ${error}`);
    res.status(500).json({
      message: `Unknown Server Error: Reference ${hash}`,
    });
  }
});

// PUT
// actions/:id
router.put('/:id', validateActionId, async (req, res) => {
  try {
    
  } catch (error) {
    const hash = Math.random().toString(36).substring(2);
    console.log(`${hash}: ${error}`);
    res.status(500).json({
      message: `Unknown Server Error: Reference ${hash}`,
    });
  }
});

// DELETE
// actions/:id
router.delete('/:id', validateActionId, async (req, res) => {
  try {
    await db.remove(req.action.id);
    res.json(req.action);
  } catch (error) {
    const hash = Math.random().toString(36).substring(2);
    console.log(`${hash}: ${error}`);
    res.status(500).json({
      message: `Unknown Server Error: Reference ${hash}`,
    });
  }
});

module.exports = router;
