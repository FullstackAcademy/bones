'use strict'

const Sequelize = require('sequelize')
console.log('here----*********************')

module.exports = db => db.define('orders', {
  status: {
    type: Sequelize.ENUM('complete', 'incomplete'),
    allowNull: false
  }
})

module.exports.associations = (Order, {User}) => {
  Order.belongsTo(User)
}
//comment
