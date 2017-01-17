'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('orders', {
  status:  {
    type: Sequelize.ENUM('in-cart', 'processing', 'completed', 'cancelled'),
    defaultValue: 'processing'
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  sessionId: {
    type: Sequelize.STRING
  }
});


module.exports = Order;
