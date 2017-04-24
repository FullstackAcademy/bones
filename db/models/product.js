'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('products', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-basketball.png&w=288&h=288&transparent=true'
  }
})

module.exports.associations = (Product, {ProdOnOrder, Category, Review}) => {
  Product.hasMany(ProdOnOrder)
  Product.belongsTo(Category)
}
