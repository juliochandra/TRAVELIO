const { db } = require('../database/database');

const home = async (req, res, next) => {
  // console.log({ userId: req.session.userId });
  const destinations = await db('destination').select('*');
  res.status(200).render('index', { destinations });
};

module.exports = { home };
