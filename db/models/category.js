'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Category = db.define('categories', {
  name: Sequelize.ENUM('companion', 'utility', 'decorative', 'miscellaneous')
});

module.exports = Category;
