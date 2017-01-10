'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('orders', {
  status: {
    type: Sequelize.ENUM,
    values: ['in cart', 'ordered', 'shipped', 'completed'],
    defaultValue: 'in cart',
  },
  session: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Order;
