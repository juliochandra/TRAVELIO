const express = require('express');
const userController = require('../controllers/userControllers');

const router = express.Router();

router.route('/signup').post(userController.signup);
router.route('/signin').get(userController.signin);
router.route('/signout').get(userController.signout);

module.exports = router;
