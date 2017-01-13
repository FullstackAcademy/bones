'use strict';
const Sequelize = require('sequelize');

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Order = require('./order');
const Product = require('./product');
const LineItem = require('./lineItem');
const Review = require('./review');
const Address = require('./address');

// Product.belongsToMany(Order, {through: 'productOrders'});
// creates join-table 'productOrders'
// NOTE: replaced above with LineItem pattern given industry pattern and it works

User.hasMany(Order, {as: 'Orders'});
// creates 'userId' on orders

Product.hasMany(Review);
// creates 'productId' on reviews

User.hasMany(Review);
// creates 'userId' on reviews

Product.hasMany(LineItem);
// creates 'productId' on line items

Order.hasMany(LineItem);
// creates 'orderId' on line items

Address.belongsTo(Order);

Address.belongsTo(User);

// associations complete, expose each model
module.exports = {User, Order, Product, LineItem, Address};
