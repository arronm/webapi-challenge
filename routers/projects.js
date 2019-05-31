const express = require('express');

const db = require('../data/helpers/projectModel');
const validateProjectId = require('../middleware/validateProjectId');

const router = express.Router();
router.use(express.json());

// GET
// projects
router.get('/', async (req, res) => {
  try {
    const projects = await db.get();
    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown Server Error',
    });
  }
});

// projects/:id
router.get('/:id', validateProjectId, async (req, res) => {
  try {
    res.json(req.project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown Server Error',
    });
  }
});

// projects/:id/actions
router.get('/:id/actions', validateProjectId, async (req, res) => {
  try {
    res.json(req.project.actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown Server Error',
    });
  }
});

// POST
// projects
router.post('/', async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown Server Error',
    });
  }
});

// projects/:id/actions
router.post('/:id/actions', async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown Server Error',
    });
  }
});

// PUT
// projects/:id
router.put('/:id', async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown Server Error',
    });
  }
});

// DELETE
// projects/:id
router.delete('/:id', async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown Server Error',
    });
  }
});

module.exports = router;
