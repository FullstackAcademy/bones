'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');
const OrderProduct = require('./orderProduct');

const Order = db.define('orders', {
    shippingDate: Sequelize.DATE,
    status: {
      type: Sequelize.ENUM,
      values: ['not submitted','processing', 'shipped', 'delivered', 'cancelled'],
      defaultValue: 'not submitted'
    },
    total: {
      type: Sequelize.INTEGER
    }
  }
);


module.exports = Order;
