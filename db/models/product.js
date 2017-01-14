'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: Sequelize.TEXT,
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
      set: function (tags) {

          tags = tags || [];

          if (typeof tags === 'string') {
              tags = tags.split(',').map(function (str) {
                  return str.trim();
              });
          }

          this.setDataValue('tags', tags);

      }
  }
},{
  classMethods: {
    findByTag: function(tag){
      return this.findAll({
        where: {
          tags:{
            $contains:[tag]
          }
        }
      })
    }
  },
  instanceMethods: {
    findSimilar: function(){
      return Product.findAll({
        where:{
          id:{
            $ne: this.id
          },
          tags:{
            $overlap: this.tags
          }
        }
      })
    }
  }
})

module.exports = Product
