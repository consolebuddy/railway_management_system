const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Train = require('./train')(sequelize, Sequelize);
const Booking = require('./booking')(sequelize, Sequelize);

// Associations
User.hasMany(Booking);
Booking.belongsTo(User);

Train.hasMany(Booking);
Booking.belongsTo(Train);

module.exports = { sequelize, User, Train, Booking };
