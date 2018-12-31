'use strict'
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  }, {})

  user.associate = function (models) {
    // associations can be defined here
  }

  return user
}
