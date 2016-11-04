'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');
const OrderProduct = require('./orderProduct');

const Order = db.define('orders', {
    shippingDate: Sequelize.DATE,
    status: {
      type: Sequelize.ENUM,
      values: ['processing', 'shipped', 'delivered', 'cancelled'],
      defaultValue: 'processing'
    },
    total: {
      type: Sequelize.INTEGER
    }
  }
);


module.exports = Order;
