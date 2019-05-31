const validateAction = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length == 0) return res.status(400).json({
      message: 'missing post data'
    });
  
    if (!req.body.text) return res.status(400).json({
      message: 'missing required text field'
    });
  
    // const user = await userDB.getById(req.params.id);
  
    // if (!user) return res.status(400).json({
    //   message: 'invalid user id',
    // });
  
    // req.user = user;
  
    next();
  } catch (error) {
    const hash = Math.random().toString(36).substring(2);
    console.log(`${hash}: ${error}`);
    res.status(500).json({
      message: `Unknown Server Error: Reference ${hash}`,
    });
  }
}

module.exports = validateAction;
