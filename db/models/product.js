'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
// const Review = require('APP/db/models/review');
const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    },
    defaultValue: 1
  },
  description: Sequelize.TEXT,
  price: {
    type: Sequelize.FLOAT,
    validate: {
      notEmpty: true
    }
  },
  categories: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    validate: {
      notEmpty: true
    }
  },
  photoURL: {
    type: Sequelize.STRING,
    defaultValue: 'http://placehold.it/250x150'
  }
},
  {
    instanceMethods: {
      avg_rating: function(){
        let productId = this.id;
        Review.findAll({
          where: {
            productId: productId
          }
        })
        .then((starRatings)=> (starRatings.reduce((a,b) => a+b))/starRatings.length.toFixed(1))
      }
    }
  });

module.exports = Product;
