'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('billings', {
  cardNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  expDate: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  ccvNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

})

module.exports.associations = (Billing, {User}) => {
  Billing.belongsTo(User)
}
