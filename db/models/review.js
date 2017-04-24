'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('reviews', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 5,
      min: 1
    }
  },
  comments: {
    type: Sequelize.TEXT
  }
})

module.exports.associations = (Review, {User, Product}) => {
  Review.hasMany(User)
  Review.hasMany(Product)
}
