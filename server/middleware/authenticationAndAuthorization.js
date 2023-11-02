const { db } = require('../database/database');

const catchAsync = require('./catchAsync');

module.exports.checkSignIn = catchAsync(async (req, res, next) => {
  try {
    console.log(req.session.isSignedIn, 'is signin ===================');
    console.log(req.session.creatorId, 'is id =======================');
    if (req.session.isSignedIn) {
      next();
    } else {
      res.status(401).json({ message: 'Please sign in first' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking creator' });
  }
});

module.exports.checkCreator = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log({ id }, 'id destination =======================');
    const destination = await db('destination')
      .where({ id })
      .first();

    console.log(destination, '==========destination');
    if (destination.user_id === req.session.creatorId) {
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
    if (review.user_id === req.session.creatorId) {
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
