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

// Create our own rockTag association table to be seeded with rockId and tagId
const RockTags = require('APP/db').define('rockTags', {});

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Address);
Address.belongsTo(User);

Order.belongsTo(Address);
Order.hasMany(CartProduct);
CartProduct.belongsTo(Order);
CartProduct.belongsTo(Rock);

Rock.hasMany(Review);
Review.belongsTo(Rock);

Category.hasMany(Rock);
Rock.belongsTo(Category);

Rock.belongsToMany(Tag, {through: RockTags});
Tag.belongsToMany(Rock, {through: RockTags});


module.exports = {User, Rock, Review, Address, CartProduct, Category, Order, Tag};
