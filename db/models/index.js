'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const Category = require('./category');
const Review = require('./review');
const OrderProducts = require('./orderProducts');

Order.belongsTo(User);
Order.belongsToMany(Product, {through: OrderProducts});
Order.hasMany(OrderProducts, {as: 'items'});

Category.belongsToMany(Product, { through: 'product_categories' });
Product.belongsToMany(Category, { through: 'product_categories' });
Product.hasMany(Review);
Review.belongsTo(User, { as: 'Reviewer' });
// if we decide to go display all reviews belonging to a user
// Review.belongsTo(Product);
// perhaps later User.hasMany(Review, { through: 'user_reviews' });

module.exports = {User, Product, Category, Review};
