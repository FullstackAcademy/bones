'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Review = db.define('reviews', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  comment: {
    type: Sequelize.TEXT
  }
});

module.exports = Review;
