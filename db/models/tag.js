'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Tag = db.define('tags', {
  name: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false
    }
  }
});

module.exports = Tag;
