const Sequelize = require('sequelize')
const db = require('APP/db')

// belongs to one Order
// belongs to one Product

const LineItem = db.define('lineItem', {

	productDetail: Sequelize.STRING, //
	count: Sequelize.INTEGER,
	unitCost: Sequelize.FLOAT,
	subtotalCost: Sequelize.FLOAT
})

module.exports = LineItem;
