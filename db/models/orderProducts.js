'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const OrderProducts = db.define('order_products', {
  price: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER
});

module.exports = OrderProducts;