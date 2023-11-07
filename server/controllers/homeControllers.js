const { db } = require('../database/database');

const home = async (req, res) => {
  // console.log({ userId: req.session.userId });
  const destinations = await db('destination').select('*');
  res.render('index', { destinations });
};

module.exports = { home };
