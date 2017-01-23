'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');
const Product = require('./product');
const OrderProducts = require('./orderProducts');

const Order = db.define('order', {
  address: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
  	allowNull: false,
  	validate: {
  		isEmail: true
  	}
  },
  totalPrice: Sequelize.INTEGER
}, {
  classMethods: {
    placeOrder: function(address, email, items) {
      
      function getItemPriceAndSetQuantity(item) {
        return Product.findById(item.id)
        .then(product => product.price)
        .then(price => ({product_id: item.id, quantity: item.quantity, price}));
      }

      function caluculateTotalPrice(items) {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      }

      return db.Promise.map(items, item => getItemPriceAndSetQuantity(item))
      .then(itemsWithPrice => ({items: itemsWithPrice, totalPrice: caluculateTotalPrice(itemsWithPrice)}))
      .then(orderInfo => this.create({
        address,
        email,
        items: orderInfo.items,
        totalPrice: orderInfo.totalPrice
      }, {
        include: [{
          model: OrderProducts,
          as: 'items'
        }]
      }))
      .then(order => order);
    }
  },
  instanceMethods: {
    calculateTotal: function(products) {
      this.totalPrice = products.reduce((total, product) => total + b.price, 0);
    }
  }
}); 

module.exports = Order;