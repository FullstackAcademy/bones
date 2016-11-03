'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Review = require('./review')
const Celeb = require('./celeb')
const Product = require('./product')

const db = require('APP/db')
const CelebProduct = db.define('CelebProduct', {})

Review.belongsTo(User);
Review.belongsTo(Product);
Celeb.belongsToMany(Product, {through: CelebProduct});
Product.belongsToMany(Celeb, {through: CelebProduct});

module.exports = {User, Review, Celeb, Product, CelebProduct}
