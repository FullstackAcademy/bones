'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('categories', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
