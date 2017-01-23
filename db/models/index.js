'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const Category = require('./category');

Order.belongsTo(User);
Order.belongsToMany(Product, {through: require('./orderProducts')});

Category.belongsToMany(Product, { through: 'product_categories' });
Product.belongsToMany(Category, { through: 'product_categories' });

module.exports = {User, Product, Category};
