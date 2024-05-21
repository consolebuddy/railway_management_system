module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      seatNumber: DataTypes.INTEGER,
    });
    return Booking;
  };
  