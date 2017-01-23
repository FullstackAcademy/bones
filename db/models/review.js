'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Review = db.define('review', {
  content: {
  	type: Sequelize.TEXT,
		validate: {
			len: [100,5000],
		},
  	allowNull: false
  },
	rating: {
  	type: Sequelize.INTEGER,
		validate: {
      max: 1,
      min: 5
		},
  	allowNull: false
  },
});

module.exports = Review;