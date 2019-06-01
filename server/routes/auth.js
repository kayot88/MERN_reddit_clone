const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const { registerValidate } = require('../controllers/validation');

function createToken(user) {
  return jwt.sign(
    {user},
    process.env.SECRET, 
    { expiresIn: '1d' }
  );
}

router.post('/register', registerValidate, async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  const token = createToken(user.toJSON())
  return res.json({token})
});
module.exports = router;
