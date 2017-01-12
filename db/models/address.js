const Sequelize = require('sequelize')
const db = require('APP/db')
const User = require('./user')
const Order = require('./order')

const Address = db.define('addresses', {

	billing1: {
		type: Sequelize.STRING,
		allowNull: false
	},
	billing2: Sequelize.STRING,
	billing3: Sequelize.STRING,
	billingSt:  {
		type: Sequelize.STRING,
		allowNull: false
	},
	billingCity:  {
		type: Sequelize.STRING,
		allowNull: false
	},
	billingZip:  {
		type: Sequelize.STRING,
		allowNull: false
	},
	shipping1: Sequelize.STRING,
	shipping2: Sequelize.STRING,
	shipping3: Sequelize.STRING,
	shippingCity:  Sequelize.STRING,
	shippingSt:  Sequelize.STRING,
	shippingZip:  Sequelize.STRING

});

module.exports = Address;