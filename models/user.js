module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      role: DataTypes.ENUM('admin', 'user'),
    });
    return User;
  };
  