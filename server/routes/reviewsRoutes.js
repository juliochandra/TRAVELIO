const express = require('express');
const reviewController = require('../controllers/reviewControllers');
const { checkSignIn } = require('../controllers/userControllers');

const router = express.Router();

router
  .route('/')
  .post(checkSignIn, reviewController.createReview)
  .get(reviewController.getAllReview);

router
  .route('/:id')
  .get(reviewController.getOneReview)
  .put(checkSignIn, reviewController.updateReview)
  .delete(checkSignIn, reviewController.deleteReview);

module.exports = router;
