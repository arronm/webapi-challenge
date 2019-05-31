const express = require('express');

const db = require('../data/helpers/projectModel');
const actionDB = require('../data/helpers/actionModel');
const validateProjectId = require('../middleware/validateProjectId');
const validateProject = require('../middleware/validateProject');
const validateAction = require('../middleware/validateAction');

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
router.get('/:id', validateProjectId, (req, res) => {
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
router.get('/:id/actions', validateProjectId, (req, res) => {
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
router.post('/', validateProject, async (req, res) => {
  try {
    const project = await db.insert(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown Server Error',
    });
  }
});

// projects/:id/actions
router.post('/:id/actions', validateProjectId, validateAction, async (req, res) => {
  try {
    const action = await actionDB.insert({
      ...req.body,
      project_id: req.project.id,
    });
    res.status(201).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown Server Error',
    });
  }
});

// PUT
// projects/:id
// NOTE: This really should be a PATCH method with how the DAO is set up
router.put('/:id', validateProjectId, async (req, res) => {
  try {
    const project = await db.update(req.project.id, req.body);
    // null case should be handled in validateProject id so project should never be null
    res.json(project);
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
