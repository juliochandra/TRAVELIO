const { db } = require('../database/database');

module.exports.createReview = async (req, res) => {
  const destinationId = req.params.id;
  const reviewData = req.body;
  const reviewFile = req.file;
  const userId = req.user.id;

  const checkReview = await db('review')
    .where({
      destination_id: destinationId,
      user_id: userId
    })
    .first();
  if (checkReview) {
    return res.status(409).json({
      status: 'fail',
      message: 'User can only have one review per destination.'
    });
  }
  const userIdAndReviewData = {
    user_id: userId,
    destination_id: destinationId,
    image: reviewFile ? reviewFile.path : null,
    ...reviewData
  };
  const [review] = await db('review')
    .insert(userIdAndReviewData)
    .returning('*');
  res.redirect(`/api/v1/destinations/${review.destination_id}`);
};

module.exports.getAllReview = async (req, res) => {
  const reviews = await db('review').select('*');
  res.status(200).json({
    status: 'success',
    data: reviews
  });
};

module.exports.getOneReview = async (req, res) => {
  const destinationId = req.params.id;
  const review = await db('review')
    .select('*')
    .where('destination_id', destinationId);
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
  const [review] = await db('review')
    .where('id', reviewId)
    .update(updateReviewData)
    .returning('*');
  res.status(201).json({
    status: 'success',
    data: review
  });
};

module.exports.deleteReview = async (req, res) => {
  const reviewID = req.params.id;
  console.log(reviewID);

  const [review] = await db('review')
    .select('*')
    .where('id', reviewID);
  console.log(review);

  await db('review')
    .where('id', reviewID)
    .del();
  res.redirect(`/api/v1/destinations/${review.destination_id}`);
};
