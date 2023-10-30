const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

// const Destination = require("../models/destinationModels"); // Import the model

// controllers
module.exports.renderCreateForm = async (req, res) => {
  try {
    res.render("destinations/create");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};

module.exports.renderUpdateForm = async (req, res) => {
  try {
    res.render("destinations/update");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};

module.exports.createDestination = async (req, res) => {
  try {
    const destinationData = req.body;
    const destination = await db("destination")
      .insert(destinationData)
      .returning("*");
    res.status(201).json({
      status: "success",
      data: destination
    });
    // res.render("destinations/create");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};

module.exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await db("destination").select("*");
    // console.log(destinations);
    // res.render("destinations/index", { destinations });
    res.status(200).json({
      status: "success",
      data: destinations
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message
    });
  }
};

module.exports.getOneDestination = async (req, res) => {
  try {
    const destinationId = req.params.id;
    const destinationData = await db("destination")
      .leftJoin("user", "user.id", "destination.user_id")
      .select("destination.*", "user.name as name_creator")
      .where("destination.id", destinationId);
    const reviewData = await db("review")
      .leftJoin("user", "user.id", "review.user_id")
      .select("review.*", "user.name");

    res.status(200).json({
      status: "success",
      destination: destinationData,
      reviews: reviewData
    });

    // ==================================================
    // const destinationData = await db("destination")
    //   .leftJoin("user", "user.id", "destination.user_id")
    //   .leftJoin("review", "review.destination_id", "destination.id")
    //   .select(
    //     "destination.*",
    //     "user.name as name_creator",
    //     "review.id as review_id",
    //     "review.review",
    //     "review.rating"
    //   )
    //   .where("destination.id", destinationId);

    // if (!destinationData || destinationData.length === 0) {
    //   return res.status(404).send("Destination not found");
    // }

    // const reviewAndRating = destinationData.map(obj => ({
    //   review_id: obj.review_id,
    //   name_creator: obj.name,
    //   review: obj.review,
    //   rating: obj.rating
    // }));

    // const { review, rating, ...restOfDestination } = destinationData[0];
    // const destination = {
    //   ...restOfDestination,
    //   reviews: reviewAndRating
    // };

    // res.status(200).json({
    //   status: "success",
    //   data: destination
    // });
    // ======================================================================
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports.updateDestination = async (req, res) => {
  try {
    const destinationId = req.params.id;

    const updateDestinationData = {
      ...req.body,
      updated_at: new Date()
    };

    const destination = await db("destination")
      .where("id", destinationId)
      .update(updateDestinationData)
      .returning("*");
    res.status(201).json({
      status: "success",
      data: destination
    });
    // res.render("destinations/create");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};

module.exports.deleteDestination = async (req, res) => {
  try {
    const destinationId = req.params.id;
    await db("review")
      .where("destination_id", destinationId)
      .del();
    await db("destination")
      .where("id", destinationId)
      .del();
    res.status(201).json({
      status: "success"
    });
    // res.render("destinations/create");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};
