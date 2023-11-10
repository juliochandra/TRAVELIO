const { db } = require('../database/database');

const catchAsync = require('./catchAsync');

module.exports.checkSignIn = catchAsync(async (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ message: 'Please sign in first' });
  }
});

module.exports.checkCreator = async (req, res, next) => {
  try {
    const { id } = req.params;
    const destination = await db('destination')
      .where({ id })
      .first();

    if (destination.user_id === req.user.id) {
      next();
    } else {
      res.status(403).json({
        status: 'success',
        data: 'not creator of destination'
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking creator' });
  }
};

module.exports.checkReviewer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = await db('review')
      .where({ id })
      .first();
    if (review.user_id === req.user.id) {
      next();
    } else {
      res.status(403).json({
        status: 'success',
        data: 'not reviewer of destination'
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking creator' });
  }
};
