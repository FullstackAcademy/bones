const Sequelize = require('sequelize')
const db = require('APP/db')
const User = require('APP/db').User
const LineItem = require('APP/db').LineItem
const Product = require('APP/db').Product

const Order = db.define('orders', {

	status: Sequelize.ENUM(
		'cart', 'purchased'
	),
	datePurchased: Sequelize.DATE,
	dateDelivered: Sequelize.DATE,
	totalCost: {
		type: Sequelize.FLOAT,
		defaultValue: 0
	},

	shipping1: Sequelize.STRING,
	shipping2: Sequelize.STRING,
	shipping3: Sequelize.STRING,
	shippingCity:  Sequelize.STRING,
	shippingSt:  Sequelize.STRING,
	shippingZip:  Sequelize.STRING,

	billing1: Sequelize.STRING,
	billing2: Sequelize.STRING,
	billing3: Sequelize.STRING,
	billingCity:  Sequelize.STRING,
	billingSt:  Sequelize.STRING,
	billingZip:  Sequelize.STRING,

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
  hooks: {
	  //
  },
  getterMethods: {
    //
  },

  setterMethods: {
    totalTheCost: function(){
		const lineItems = this.getDataValue('lineItems');
		let sum = 0;
		for (var i = 0; i < lineItems.length; i++){
			sum += lineItems[0].subtotalCost;
		}
		this.setDataValue('totalCost', sum);
    }
  },

  classMethods: {
	  //
  },

  instanceMethods: {
    //set buyer

  }

});

module.exports = Order;
