const express = require('express');
const homeControllers = require('../controllers/homeControllers');
const catchAsync = require('../middleware/catchAsync');

const router = express.Router();

router.route('/').get(catchAsync(homeControllers.home));

module.exports = router;
