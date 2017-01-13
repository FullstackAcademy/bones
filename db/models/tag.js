'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Tag = db.define('tags', {
  name: {
    type: Sequelize.STRING,
    allowNull: false

  }
});

module.exports = Tag;
