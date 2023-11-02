const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports.createReview = async (req, res) => {
  const reviewData = req.body;
  const userIdAndReviewData = {
    user_id: req.session.creatorId,
    ...reviewData
  };
  const review = await db('review')
    .insert(userIdAndReviewData)
    .returning('*');
  res.status(201).json({
    status: 'success',
    data: review
  });
};

module.exports.getAllReview = async (req, res) => {
  const reviews = await db('review').select('*');
  res.status(200).json({
    status: 'success',
    data: reviews
  });
};

module.exports.getOneReview = async (req, res) => {
  const reviewId = req.params.id;
  const review = await db('review')
    .select('*')
    .where('id', reviewId);
  res.status(200).json({
    status: 'success',
    data: review
  });
};

module.exports.updateReview = async (req, res) => {
  const reviewId = req.params.id;
  const updateReviewData = {
    ...req.body,
    updated_at: new Date()
  };
  const review = await db('review')
    .where('id', reviewId)
    .update(updateReviewData)
    .returning('*');
  res.status(201).json({
    status: 'success',
    data: review
  });
};

module.exports.deleteReview = async (req, res) => {
  const reviewId = req.params.id;
  await db('review')
    .where('id', reviewId)
    .del();
  res.status(201).json({
    status: 'success'
  });
};
