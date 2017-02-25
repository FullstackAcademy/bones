'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM('Toy', 'Video Game', 'Board Game', 'Card Game'),
    allowNull: false
  },
  tag: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'default.jpg'
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
}, {
  instanceMethods: {
    availablity() {
      if (this.quantity === 0) {
        return 'Currently Unavailable'
      } else {
        return 'Available'
      }
    }
  }
})

module.exports = Product;
