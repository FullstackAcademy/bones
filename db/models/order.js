const Sequelize = require('sequelize')
const db = require('APP/db')
//const User = require('APP/db').User
const User = require('./user')
const Product = require('./product')
const LineItem = require('./lineItem')
// we noticed the symlink wasn't importing properly?

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
	  beforeUpdate: function() {
		  const lineItems = this.getDataValue('lineItemDetails');
		  let sum = lineItems.reduce( (prev, current) =>  prev.subtotalCost + current.subtotalCost)
		  this.setDataValue('totalCost', sum);
	  }
	  //
  },
  getterMethods: {
    //
  },

  setterMethods: {
    totalTheCost: function(){
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
