const { sequelize, Booking, Train } = require('../models');

exports.bookSeat = async (req, res) => {
  const { trainId } = req.body;
  const userId = req.user.id;

  await sequelize.transaction(async (t) => {
    const train = await Train.findOne({ where: { id: trainId }, lock: t.LOCK.UPDATE, transaction: t });

    if (train.availableSeats <= 0) {
      return res.status(400).json({ message: 'No seats available' });
    }

    train.availableSeats -= 1;
    await train.save({ transaction: t });

    const booking = await Booking.create({ seatNumber: train.totalSeats - train.availableSeats, UserId: userId, TrainId: trainId }, { transaction: t });
    res.status(201).json(booking);
  });
};

exports.getBookingDetails = async (req, res) => {
  const userId = req.user.id;
  const bookings = await Booking.findAll({ where: { UserId: userId } });
  res.json(bookings);
};
