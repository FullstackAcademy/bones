'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Rock = require('./rock');
const Review = require('./review');
const Address = require('./address');
const CartProduct = require('./cartProduct');
const Category = require('./category');
const Order = require('./order');
const Tag = require('./tag');

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

Rock.hasMany(Review);
Review.belongsTo(Rock);

Rock.hasOne(Category);
Category.belongsTo(Rock);

Rock.hasMany(Tag);
Tag.belongsToMany(Rock, {through: 'rockTags'});

module.exports = {User, Rock, Review, Address, CartProduct, Category, Order, Tag};
