const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')
// belongs to one Order
// belongs to one Product
const lineItem = db.define('lineItem', {
	count: {
		type: Sequelize.INTEGER,
		defaultValue: 1
	}
}, {
	scopes: {
		products: () => ({
			include: [
				{
					model: db.model('products')
				}
			]
		})
	},
	instanceMethods: {
		increaseCount: function(val) {
			if (val)
				this.count += val
			else {
				this.count++
			}
			this.subtotalCost = this.count * this.unitCost
		}
	}
})
module.exports = lineItem;
