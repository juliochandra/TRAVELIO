const bcrypt = require('bcrypt');
const passport = require('passport');
const { db } = require('../database/database');

module.exports.renderSignup = async (req, res) => {
  res.render('users/register');
};

module.exports.renderSignin = async (req, res) => {
  res.render('users/login');
};

module.exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const checkUserEmail = await db('user')
    .where({ email })
    .first();

  if (checkUserEmail) {
    return res.status(409).redirect('/');
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const [user] = await db('user')
    .insert({ name, email, password: hashedPassword })
    .returning('*');
  if (user) {
    req.session.isSignedIn = true;
    req.session.creatorId = user.id;
    res.status(201).redirect('/');
  } else {
    res.status(401).json({ message: 'Invalid data' });
  }
};

module.exports.signin = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/api/v1/users/signin');
    }
    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  })(req, res, next);
};

module.exports.signout = async (req, res, next) => {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    // Successfully logged out, respond here
    res.status(200).redirect('/');
  });
};
