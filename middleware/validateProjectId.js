const db = require('../data/helpers/projectModel');

const validateProjectId = async (req, res, next) => {
  try {
    const project = await db.get(req.params.id);

    if (!project) return res.status(400).json({
      message: 'invalid project id.',
    });

    req.project = project;

    next();
  } catch (error) {
    const hash = Math.random().toString(36).substring(2);
    console.log(`${hash}: ${error}`);
    res.status(500).json({
      message: `Unknown Server Error: Reference ${hash}`,
    });
  }
}

module.exports = validateProjectId;
