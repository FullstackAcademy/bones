'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');
const Category = require('./category');

const Product = db.define('products', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false,
    unique: true
  },
  description: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  price: {
  	type: Sequelize.INTEGER,
  	allowNull: false,
    validate: {
      min: 0
    }
  },
  quantity: {
  	type: Sequelize.INTEGER,
  	allowNull: false,
    validate: {
      min: 0,
      max: 999
    }
  },
  photoURL: {
  	type: Sequelize.STRING,
  	defaultValue: 'https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=300%C3%97300&w=300&h=300&fm=png',
    validate: {
      isUrl: true
    }
  }
},{
	defaultScope: {
		include: [{
			model: Category
		}]
	}
});

module.exports = Product;