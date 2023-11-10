const express = require('express');
const { upload } = require('../middleware/uploadCloudinary');
const reviewController = require('../controllers/reviewControllers');
const {
  checkSignIn,
  checkReviewer
} = require('../middleware/authenticationAndAuthorization');
const catchAsync = require('../middleware/catchAsync');

const router = express.Router();

router.route('/').get(catchAsync(reviewController.getAllReview));

router
  .route('/:id')
  .post(
    checkSignIn,
    upload.single('image'),
    catchAsync(reviewController.createReview)
  )
  .get(catchAsync(reviewController.getOneReview))
  .put(checkSignIn, checkReviewer, catchAsync(reviewController.updateReview))
  .delete(
    checkSignIn,
    checkReviewer,
    catchAsync(reviewController.deleteReview)
  );

module.exports = router;
