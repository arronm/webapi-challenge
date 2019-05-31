const db = require('../data/helpers/actionModel');

const validateActionId = async (req, res, next) => {
  try {
    const action = await db.get(req.params.id);

    if (!action) return res.status(400).json({
      message: 'invalid action id.',
    });

    req.action = action;
    next();
  } catch (error) {
    const hash = Math.random().toString(36).substring(2);
    console.log(`${hash}: ${error}`);
    res.status(500).json({
      message: `Unknown Server Error: Reference ${hash}`,
    });
  }
}

module.exports = validateActionId;
