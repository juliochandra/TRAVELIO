const express = require('express');
const destinationController = require('../controllers/destinationControllers');
const { checkSignIn, checkCreator } = require('../controllers/userControllers');

const router = express.Router();

router
  .route('/create')
  .get(checkSignIn, destinationController.renderCreateForm);
router
  .route('/:id/update')
  .get(checkSignIn, checkCreator, destinationController.renderUpdateForm);

router
  .route('/')
  .post(checkSignIn, destinationController.createDestination)
  .get(destinationController.getAllDestinations);

router
  .route('/:id')
  .get(destinationController.getOneDestination)
  .put(checkSignIn, checkCreator, destinationController.updateDestination)
  .delete(checkSignIn, checkCreator, destinationController.deleteDestination);

module.exports = router;
