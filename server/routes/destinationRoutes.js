const express = require('express');
const { upload } = require('../middleware/uploadCloudinary');
const destinationController = require('../controllers/destinationControllers');
const {
  checkSignIn,
  checkCreator
} = require('../middleware/authenticationAndAuthorization');
const catchAsync = require('../middleware/catchAsync');

const router = express.Router();

router
  .route('/create')
  .get(checkSignIn, catchAsync(destinationController.renderCreateForm));
router
  .route('/:id/update')
  .get(
    checkSignIn,
    checkCreator,
    catchAsync(destinationController.renderUpdateForm)
  );

router
  .route('/')
  .post(
    checkSignIn,
    upload.single('image'),
    catchAsync(destinationController.createDestination)
  )
  .get(catchAsync(destinationController.getAllDestinations));

router
  .route('/:id')
  .get(catchAsync(destinationController.getOneDestination))
  .put(
    checkSignIn,
    checkCreator,
    catchAsync(destinationController.updateDestination)
  )
  .delete(
    checkSignIn,
    checkCreator,
    catchAsync(destinationController.deleteDestination)
  );

module.exports = router;
