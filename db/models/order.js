const Sequelize = require('sequelize')
const db = require('APP/db')
//const User = require('APP/db').User
const User = require('./user')
const Product = require('./product')
const LineItem = require('./lineItem')
// we noticed the symlink wasn't importing properly?
//Make address models
const Order = db.define('orders', {

	status: {
		type: Sequelize.ENUM(
		'cart', 'purchased'
	),
	defaultValue: 'cart'},
	datePurchased: Sequelize.DATE,
	dateDelivered: Sequelize.DATE

},
// methods?
{
	scopes :{
		lineItems: () => ({
			include: [{
				model: db.model('lineItem')
			}]
		})
	}
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
