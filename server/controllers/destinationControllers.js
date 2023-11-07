const { db } = require('../database/database');

// controllers
module.exports.renderCreateForm = async (req, res) => {
  res.render('destinations/create');
};

module.exports.renderUpdateForm = async (req, res) => {
  res.render('destinations/update');
};

module.exports.createDestination = async (req, res) => {
  const destinationData = req.body;
  const destinationFile = req.file;

  const userIdAndDestinationData = {
    user_id: req.user.id,
    image:
      destinationFile && destinationFile.path
        ? destinationFile.path
        : 'https://res.cloudinary.com/dsh5ppscb/image/upload/v1699170463/Binar/yqaqobef53hwkzvg4hpv.jpg',
    ...destinationData
  };
  console.log(userIdAndDestinationData);
  const destination = await db('destination')
    .insert(userIdAndDestinationData)
    .returning('*');
  res.status(201).json({
    status: 'success',
    data: destination
  });
  // res.render("destinations/create");
};

module.exports.getAllDestinations = async (req, res) => {
  const destinations = await db('destination').select('*');
  // res.render("destinations/index", { destinations });
  res.status(200).json({
    status: 'success',
    data: destinations
  });
};

module.exports.getOneDestination = async (req, res) => {
  const destinationId = req.params.id;
  const destinationData = await db('destination')
    .leftJoin('user', 'user.id', 'destination.user_id')
    .select('destination.*', 'user.name as name_creator')
    .where('destination.id', destinationId);
  const reviewData = await db('review')
    .leftJoin('user', 'user.id', 'review.user_id')
    .select('review.*', 'user.name')
    .where('review.destination_id', destinationId);

  res.status(200).json({
    status: 'success',
    destination: destinationData,
    reviews: reviewData
  });
};

module.exports.updateDestination = async (req, res) => {
  const destinationId = req.params.id;

  const updateDestinationData = {
    ...req.body,
    updated_at: new Date()
  };

  const [destination] = await db('destination')
    .where('id', destinationId)
    .update(updateDestinationData)
    .returning('*');
  res.status(201).json({
    status: 'success',
    data: destination
  });
  // res.render("destinations/create");
};

module.exports.deleteDestination = async (req, res) => {
  const destinationId = req.params.id;
  await db('review')
    .where('destination_id', destinationId)
    .del();
  await db('destination')
    .where('id', destinationId)
    .del();
  res.status(201).json({
    status: 'success'
  });
  // res.render("destinations/create");
};
