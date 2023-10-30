const express = require("express");
const destinationController = require("../controllers/destinationControllers");

const router = express.Router();

router.route("/create").get(destinationController.renderCreateForm);
router.route("/:id/update").get(destinationController.renderUpdateForm);

router
  .route("/")
  .post(destinationController.createDestination)
  .get(destinationController.getAllDestinations);

router
  .route("/:id")
  .get(destinationController.getOneDestination)
  .put(destinationController.updateDestination)
  .delete(destinationController.deleteDestination);

module.exports = router;
