'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Category = db.define('categories', {
  name: Sequelize.ENUM('Companion', 'Utility', 'Decorative', 'Miscellaneous')
});

module.exports = Category;
