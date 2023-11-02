const { db } = require('../database/database');

module.exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await db('user')
    .insert({ name, email, password })
    .returning('*');
  if (user) {
    req.session.isSignedIn = true;
    req.session.creatorId = user.id;
    res.status(201).json({
      status: 'success',
      data: 'Signed in successfully'
    });
  } else {
    res.status(401).json({ message: 'Invalid data' });
  }
};

module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await db('user')
    .where({ email, password })
    .first();
  if (user) {
    req.session.isSignedIn = true;
    req.session.creatorId = user.id;
    // console.log(req.session.isSignedIn, '<=================== is signin');
    // console.log(req.session.creatorId, '<=================== is id ');
    res.status(201).json({
      status: 'success',
      data: 'Signed in successfully'
    });
  } else {
    res.status(401).json({ message: 'Invalid data' });
  }
};

module.exports.signout = async (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(500).json({
        status: 'fail',
        message: 'Error signing out'
      });
      return;
    }
    res.status(201).json({
      status: 'success',
      data: 'Signed out successfully'
    });
  });
};
