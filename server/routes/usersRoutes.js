const express = require('express');

const userController = require('../controllers/userControllers');
const catchAsync = require('../middleware/catchAsync');

const router = express.Router();

router
  .route('/signup')
  .get(userController.renderSignup)
  .post(catchAsync(userController.signup));

router
  .route('/signin')
  .get(userController.renderSignin)
  .post(userController.signin);

router.route('/signout').get(catchAsync(userController.signout));

module.exports = router;
