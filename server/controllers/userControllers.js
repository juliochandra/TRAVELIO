const bcrypt = require('bcrypt');
const { db } = require('../database/database');

module.exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const checkUserEmail = await db('user')
    .where({ email })
    .first();

  if (checkUserEmail) {
    return res.status(409).json({ message: 'Email already in use' });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const [user] = await db('user')
    .insert({ name, email, password: hashedPassword })
    .returning('*');
  if (user) {
    req.session.isSignedIn = true;
    req.session.creatorId = user.id;
    res.status(201).json({
      status: 'success',
      message: 'Signed up successfully',
      data: user
    });
  } else {
    res.status(401).json({ message: 'Invalid data' });
  }
};

module.exports.signin = async (req, res) => {
  // console.log(req.body, '<========= in endpoint login');
  res.status(200).json({
    status: 'success',
    user: req.user
  });
};

module.exports.signout = async (req, res, next) => {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    // Successfully logged out, respond here
    res.status(200).json({
      status: 'success',
      data: 'Signed out successfully'
    });
  });
};
