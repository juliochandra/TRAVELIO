const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

module.exports.createReview = async (req, res) => {
  try {
    console.log(req.body);
    const reviewData = req.body;
    const review = await db("review")
      .insert(reviewData)
      .returning("*");
    res.status(201).json({
      status: "success",
      data: review
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};

module.exports.getAllReview = async (req, res) => {
  try {
    const reviews = await db("review").select("*");
    res.status(200).json({
      status: "success",
      data: reviews
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message
    });
  }
};

module.exports.getOneReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const review = await db("review")
      .select("*")
      .where("id", reviewId);
    res.status(200).json({
      status: "success",
      data: review
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports.updateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const updateReviewData = req.body;
    const review = await db("review")
      .where("id", reviewId)
      .update(updateReviewData)
      .returning("*");
    res.status(201).json({
      status: "success",
      data: review
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};

module.exports.deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    await db("review")
      .where("id", reviewId)
      .del();
    res.status(201).json({
      status: "success"
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};
