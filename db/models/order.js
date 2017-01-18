const Sequelize = require('sequelize')
const db = require('APP/db')
const User = require('./user')
const Product = require('./product')
const LineItem = require('./lineItem')

const Order = db.define('orders', {

	status: {
		type: Sequelize.ENUM(
		'cart', 'purchased'
	),
	defaultValue: 'cart'},
	datePurchased: Sequelize.DATE,
	dateDelivered: Sequelize.DATE

},

{
	scopes :{
		lineItems: () => ({
			include: [{
				model: db.model('lineItem').scope('products')
			}]
		})
	}
});

module.exports = Order;
