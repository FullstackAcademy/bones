'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Address = require('./address')
const Item = require('./item')
const Order = require('./order')

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(Item);
Item.belongsTo(Order);

User.hasMany(Address);
Address.belongsTo(User);

Address.hasMany(Order);
Order.belongsTo(Address);



module.exports = {
    User,
    Address,
    Item,
    Order
}
