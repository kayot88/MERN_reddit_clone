const router = require('express').Router();
const validateRegister = require('../validation/register');

router.get('/register', (req, res) => {
  const { isValid, errors } = validateRegister(req.body);
  if (!isValid) {
    return res.status(423).json(errors)
  }
  console.log(errors);
 return res.send('ok')
})
module.exports =  router