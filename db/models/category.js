'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('categories', {
  name: {
    //Maybe an ENUM? Normally categories have fixed choices
    type: Sequelize.STRING,
    allowNull: false
  },
  //Why do categories have image URLs?
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
