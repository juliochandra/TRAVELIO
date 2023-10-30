const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

// const Destination = require("../models/destinationModels"); // Import the model

// controllers
module.exports.renderCreateForm = async (req, res) => {
  try {
    console.log("create new data");
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
    console.log("create new data");
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
    console.log(req.body);
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
      .leftJoin("review", "review.destination_id", "destination.id")
      .select("*")
      .where("destination.id", destinationId);
    console.log(destinationData, "========== destinationData");

    if (!destinationData || destinationData.length === 0) {
      return res.status(404).send("Destination not found");
    }

    // Extracting the reviews and ratings
    const reviews = destinationData.map(obj => {
      return obj.review;
    });
    const ratings = destinationData.map(obj => {
      return obj.rating;
    });

    // console.log(reviews, "-------reviews");
    const { ...restOfDestination } = destinationData[0];
    // console.log(restOfDestination, "===========================> rest");
    const destination = {
      ...restOfDestination,
      review: reviews,
      rating: ratings
    };

    // console.log(destination);
    res.status(200).json({
      status: "success",
      data: destination
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.updateDestination = async (req, res) => {
  try {
    const destinationId = req.params.id;
    const updateDestinationData = req.body;
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
