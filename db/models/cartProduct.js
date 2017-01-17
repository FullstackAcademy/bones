'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const cartProduct = db.define('cartProducts', {
  quantity: {
    type: Sequelize.INTEGER
  }
});

module.exports = cartProduct;
