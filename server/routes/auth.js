const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = require('express').Router();
const {
  registerValidate,
  loginValidate
} = require('../controllers/validation');

function createToken(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: '1d' });
}

router.post('/register', registerValidate, async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  const token = createToken(user.toJSON());

  return res.json({ token });
});

router.post('/login', loginValidate, async (req, res, next) => {
  try {
    const candidate = await User.findOne({
      username: req.body.username
    });
    if (candidate) {
      const passwordResult = bcrypt.compareSync(
        req.body.password,
        candidate.password
      );
      console.log(passwordResult);
      if (passwordResult) {
        const token = jwt.sign({ candidate }, process.env.SECRET, {
          expiresIn: '1d'
        });
        return res.json({ token });
      }
    } else {
      return res.status(401).json({message: 'User not found'});
    }
  } catch (err) {
   return res.status(401).json({ message: 'Some other error' });
  }
});

module.exports = router;
