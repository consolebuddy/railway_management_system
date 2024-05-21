const { Train } = require('../models');

exports.addTrain = async (req, res) => {
  const { name, source, destination, totalSeats } = req.body;
  const train = await Train.create({ name, source, destination, totalSeats, availableSeats: totalSeats });
  res.status(201).json(train);
};

exports.getSeatAvailability = async (req, res) => {
  const { source, destination } = req.query;
  const trains = await Train.findAll({ where: { source, destination } });
  res.json(trains);
};
