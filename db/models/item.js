'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Item = db.define('items', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
}, {
  instanceMethods: {
    add: function () {
      this.quantity += 1;
    },
    subtract: function () {
      this.quantity -= 1;
    }
  },
});

module.exports = Item;
