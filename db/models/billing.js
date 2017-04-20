'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('billings', {
  //Name on the card?
  cardNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      //How do we handle dashes entered?
      isNumeric: true
    }
  },
  expDate: {
    //Should be a Sequelize.Date
    type: Sequelize.INTEGER,
    allowNull: false
  },
  ccvNumber: {
    //Should be string
    type: Sequelize.INTEGER,
    allowNull: false
  },
  //Billing vs shipping address?
  // Should an address be it's own table?
  // This table seems to contain two entities, cards and addresses
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {  //Validations?
    type: Sequelize.STRING,
    allowNull: false
  },
  zipCode: { //Validations
    type: Sequelize.INTEGER,
    allowNull: false
  }

})

module.exports.associations = (Billing, {User}) => {
  Billing.belongsTo(User)
}
