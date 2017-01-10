const Sequelize = require('sequelize')
const db = require('APP/db')
const User = require('APP/db').User

const Order = db.define('orders', {

	status: Sequelize.ENUM(
		'cart', 'purchased'
	),
	datePurchased: Sequelize.DATE,
	dateDelivered: Sequelize.DATE,
	totalCost: Sequelize.FLOAT,

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

	customer: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		get: function() {
			User.findById(this.userId)
			.then(foundUser => this.setDataValue('customer', foundUser))
			//this is placing the entire object on this column, for testing
			.catch(console.error)
		}
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
    //
  },

  classMethods: {
	  //
  },

  instanceMethods: {
    //set buyer

  }

});

module.exports = Order;
