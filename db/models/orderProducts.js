'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const OrderProducts = db.define('order_products', {
  price: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER
}, {
  classMethods: {
    calculateTotal: function(orderId) {
      return new Promise((resolve, reject) => {
        this.findAll({
          where: {
            order_id: orderId
          }
        })
        .then(products => products.reduce((total, product) => total + product.price, 0))
        .then(total => resolve(total))
        .catch(reject);
      });
    }
  }
});

module.exports = OrderProducts;