const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

let isSignedIn = false;
let creatorId = null;

module.exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await db('user')
      .insert({ name, email, password })
      .returning('*');
    res.status(201).json({
      status: 'success',
      data: user
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
};

module.exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    db('user')
      .where({ email, password })
      .first()
      .then(user => {
        if (user) {
          isSignedIn = true;
          creatorId = user.id;
          res.status(201).json({
            status: 'success',
            data: 'Signed in successfully'
          });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
};

module.exports.signout = async (req, res) => {
  try {
    isSignedIn = false;
    creatorId = null;
    res.status(201).json({
      status: 'success',
      data: 'Signed out successfully'
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
};

module.exports.checkSignIn = (req, res, next) => {
  if (isSignedIn) {
    req.creatorId = creatorId;
    next();
  } else {
    res.status(401).json({ message: 'Please sign in first' });
  }
};

module.exports.checkCreator = (req, res, next) => {
  const { id } = req.params;
  db('destination')
    .where({ id })
    .first()
    .then(destination => {
      if (destination.user_id === creatorId) {
        next();
      } else {
        res.status(403).json({
          status: 'success',
          data: 'not creator of destination'
        });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error checking creator' });
    });
};
