const validationRegister = require('../validation/register');
const User = require('../models/User');

exports.registerValidate = async function(req, res, next) {
  const { isValid, errors } = validationRegister(req.body);
  if (!isValid) {
    return res.status(423).json(errors)
  }
  const {username} = req.body
  errors.username = 'user already exist'
  const user = await User.findOne({username})
  if (user) {
    return res.status(423).json(errors.username)
  }
  return next()
};
