'use strict';

const Sequelize = require('sequelize');
const db = require('App/db');

const cartProduct = db.define('cartProducts', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  }
});

module.exports = cartProduct;