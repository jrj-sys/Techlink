const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// hash passwords for user security 
const bcrypt = require('bcrypt')

class User extends Model {};

// initialize User sequelize model
User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // passwords must be at least 4 characters in length
          len: [4]
        }
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
  }
);

module.exports = User;

