const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy(async function(username, password, done) {
  try {
    //find one user
    const user = await User.findOne({ username });
    //user not found
    if (!user) {
      return done(null, false, { message: 'incorrect username' });
    }
    // password not mutch
    const passComp = await user.comparePassword(password);

    if (!passComp) {
      return done(null, false, { message: 'incorrect password' });
    }
    return done(null, user.toJSON());
  } catch (error) {
    done(error);
  }
});
