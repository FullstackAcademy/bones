'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: Sequelize.TEXT,
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  size: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  inventory: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: Sequelize.ARRAY(Sequelize.STRING)
})

module.exports = Product
