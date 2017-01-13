const Sequelize = require('sequelize')
const db = require('APP/db')
//const User = require('APP/db').User
const User = require('./user')
const Product = require('./product')
const LineItem = require('./lineItem')
// we noticed the symlink wasn't importing properly?
//Make address models
const Order = db.define('orders', {

	status: Sequelize.ENUM(
		'cart', 'purchased'
	),
	datePurchased: Sequelize.DATE,
	dateDelivered: Sequelize.DATE,
	totalCost: {
		//calculate on the front end
		type: Sequelize.FLOAT,
		defaultValue: 0
	},

	customerType: Sequelize.ENUM(
			'guest', 'registered'
		),
	customer: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		// get: function() {
		// 	User.findById(this.userId)
		// 	.then(foundUser => this.setDataValue('customer', foundUser))
		// 	//this is placing the entire object on this column, for testing
		// 	.catch(console.error)
		// }
	},
	// this holds all the line items
	lineItemDetails: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		defaultValue: []
	}

},
// methods?
{
  // instanceMethods: {
	 //  beforeUpdate: function(order) {
		// 	return Product.findAll({where: { id: order.order_id } })
		// 		.then(products => {
		// 		})
		//   // const lineItems = this.getDataValue('lineItemDetails');
		//   // let sum = lineItems.reduce( (prev, current) =>  prev.subtotalCost + current.subtotalCost)
		//   // this.setDataValue('totalCost', sum);
	 //  }
	 //  //
  // }
});

module.exports = Order;
