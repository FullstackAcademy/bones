const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')
// belongs to one Order
// belongs to one Product
const lineItem = db.define('lineItem', {
    productDetail: Sequelize.STRING,
    count: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    unitCost: {
        type: Sequelize.FLOAT,
        defaultValue: 0
    },
    subtotalCost: {
        type: Sequelize.FLOAT
    }
},
    {
    instanceMethods: {
        increaseCount: function(val) {
					if(val) this.count += val
					else{
						this.count++
					}
						this.subtotalCost = this.count * this.unitCost
        },
        setData: function(price, detail) {
                    this.setDataValue('unitCost', price)
                    this.setDataValue('productDetail', detail)
        }
    },
    hooks: {
        beforeUpdate: function(lineItem) {
						return Product.findOne({
							where: {
								id: lineItem.product_id
							}
						})
						.then(product=>{
							lineItem.unitCost = product.unitPrice;
							lineItem.productDetail = product.title;
							lineItem.subtotalCost = lineItem.count * lineItem.unitCost
						})
        }
    }
})
module.exports = lineItem;
