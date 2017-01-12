'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Inventory = db.define('inventory', {
  size: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Inventory
