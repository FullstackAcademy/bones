const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
	title: Sequelize.STRING,
	brand: Sequelize.STRING,
	category: Sequelize.ENUM(
		'paint', 'prep', 'brushes', 'cleanup'
	),
	description: Sequelize.STRING,
	size: Sequelize.STRING,
	unitPrice: Sequelize.FLOAT,
	company: Sequelize.STRING,
	SKU: Sequelize.STRING
}, {
        getterMethods: {
            starRating: function() {
                //getReviews()?
				// get average of all reviews with this productId something like this?  //Math.floor(foundReviews.reduce(function(prev, current) {
					//return prev.rating + current.rating
				//} / foundReviews.length))
              }
          }
      },{
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
