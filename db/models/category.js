'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Category = db.define('categories', {
	name: {
		type: Sequelize.STRING,
		unique: true
	}
});

module.exports = Category;