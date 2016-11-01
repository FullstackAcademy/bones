'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')

const Review = require('./review')



Review.belongsTo(User);
// Review.belongsTo(Product);
module.exports = {User, Review}
