const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

// controllers
module.exports.createDestination = async (req, res) => {
  try {
    console.log("create new data");
    res.render("../views/destinations/create");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await db("destinations").select("*");
    console.log(destinations);
    res.render("../views/destinations/index", { destinations });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports.getOneDestination = async (req, res) => {
  try {
    const destinationId = req.params.id;
    const destination = await db("destinations")
      .where("destination_id", destinationId)
      .first();
    console.log(destination);
    if (destination) {
      res.render("../views/destinations/show", { destination });
    } else {
      res.status(404).json({
        status: "fail",
        message: `Destination with ID ${destinationId} not found`,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports.updateDestination = async (req, res) => {
  try {
    console.log("update multiple input");
    res.render("../views/destinations/update", { destination });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports.updatePartDestination = async (req, res) => {
  try {
    console.log("update one input");
    res.render("../views/destinations/update", { destination });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports.deleteDestination = async (req, res) => {
  try {
    console.log("delete one data");
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
  //    finally {
  //     console.log("db disconnected");
  //     db.destroy();
  //   }
};
