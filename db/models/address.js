'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('addresses', {
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Address;
