const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = db.define('products', {
	title: Sequelize.STRING,
	brand: Sequelize.STRING,
	category: Sequelize.ENUM('paint', 'tools', 'accessories', 'prep'),
	description: Sequelize.STRING,
	size: Sequelize.STRING,
	unitPrice: Sequelize.FLOAT,
	company: Sequelize.STRING,
	SKU: Sequelize.STRING,
	inventoryQuantity: Sequelize.INTEGER,
	photoUrl: {
		type: Sequelize.STRING,
		defaultValue: 'https://www.phactual.com/wp-content/uploads/2015/05/006-bill-murray-theredlist-5-times-bill-murray-won-at-life-the-only-way-bill-murray-can.jpeg',
		validate: {
			isUrl: true
		}
	},
	paintColor: Sequelize.ENUM('black', 'yellow', 'red', 'blue', 'green', 'orange', 'white', 'pink', 'purple'),
	paintType: Sequelize.ENUM('flat', 'eggshell', 'semi-gloss', 'gloss'),
	paintLoc: Sequelize.ENUM('interior', 'exterior'),
	accesssoryType: Sequelize.ENUM('prep', 'cleanup', 'safety'),
	toolType: Sequelize.ENUM('painting')
}, {
	getterMethods: {
		starRating: function() {
			//getReviews()?
			// get average of all reviews with this productId something like this?  //Math.floor(foundReviews.reduce(function(prev, current) {
			//return prev.rating + current.rating
			//} / foundReviews.length))
		}
	}
}, {
	classMethods: {
		//
	},
	instanceMethods: {
		//
	},
	hooks: {
		//
	}
});
module.exports = Product;
