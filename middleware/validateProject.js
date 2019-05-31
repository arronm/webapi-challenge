const validateProject = (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
      message: 'missing project data',
    });

    if (!req.body.name || !req.body.description) return res.status(400).json({
      message: `missing ${!req.body.name ? 'name' : 'description'} field`,
    });

    next();
  } catch (error) {
    const hash = Math.random().toString(36).substring(2);
    console.log(`${hash}: ${error}`);
    res.status(500).json({
      message: `Unknown Server Error: Reference ${hash}`,
    });
  }
}

module.exports = validateProject;
