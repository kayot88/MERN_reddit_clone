const Validator = require('validator');
module.exports = function(values) {
  let errors ={}
  if (Validator.isEmpty(values.username)) {
    errors.username = 'username is empty'
  }
  if (Validator.isEmpty(values.password)) {
    errors.password = 'password is empty';
  }
  if (!Validator.isLength(values.username, { min: 3, max: 30 })) {
    errors.username = 'username must bee between 3 & 30 char';
  }
  if (!Validator.isLength(values.password, { min: 6, max: 30 })) {
    errors.password = 'password must bee between 6 & 30 char';
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
};
