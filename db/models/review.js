'use strict'

const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	body: {
		type: Sequelize.TEXT
	},
	rating: {
		type: Sequelize.ENUM('1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'),
		allowNull: false
	},
	photo: {
		type: Sequelize.STRING,
		validate: {
			isUrl: true
		}
	}
});

module.exports = Review;