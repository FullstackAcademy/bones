'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Rock = db.define('rocks', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  price: {
    type: Sequelize.INTEGER, //this will be in cents
    allowNull: false
  },
  weight: Sequelize.FLOAT,
  color: Sequelize.ENUM('black', 'brown', 'grey', 'white', 'blue'),
  description: Sequelize.TEXT,
  stock: Sequelize.INTEGER
});

module.exports = Rock;
