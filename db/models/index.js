'use strict';
var db = require('APP/db')

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Event = require('./event')
const Charity = require('./charity')

User.belongsToMany(Charity)
Charity.belongsToMany(User)
Charity.hasMany(Event)
User.belongsToMany(Event)
Event.belongsToMany(User)

module.exports = db;


