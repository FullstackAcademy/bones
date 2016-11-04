'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');
const Product = require('./product')

const OrderProduct = db.define('order_product', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  pricePerUnit: {
    type: Sequelize.FLOAT
  }
});



module.exports = OrderProduct
