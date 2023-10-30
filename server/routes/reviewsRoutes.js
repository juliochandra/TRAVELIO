const express = require("express");
const reviewController = require("../controllers/reviewControllers");

const router = express.Router();

router
  .route("/")
  .post(reviewController.createReview)
  .get(reviewController.getAllReview);

router
  .route("/:id")
  .get(reviewController.getOneReview)
  .put(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
