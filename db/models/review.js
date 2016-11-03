'use strict'

const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
  stars:{
    type:Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      max: 5,
      min: 0,
    }
  },
  text:{
    type: Sequelize.STRING,
    validate: {
      len: [10],
    }
  },
});


module.exports = Review