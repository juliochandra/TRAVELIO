const express = require("express");
const destinationController = require("../controllers/destinationControllers");
const destinationsRouter = express.Router();

destinationsRouter
  .route("/")
  .post(destinationController.createDestination)
  .get(destinationController.getAllDestinations);

destinationsRouter
  .route("/:id")
  .get(destinationController.getOneDestination)
  .put(destinationController.updateDestination)
  .patch(destinationController.updatePartDestination)
  .delete(destinationController.deleteDestination);

module.exports = destinationsRouter;
