/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const Order = db.model('orders');
const User = db.model('users');
const CartProduct = db.model('cartProducts');
const Address = db.model('addresses');
const Rocks = db.model('rocks');

// const { selfOnly, mustBeLoggedIn, forbidden } = require('./auth.filters');

const router = require('express').Router();


// Get all the orders
router.get('/', (req, res, next) => {
  Order.findAll( { include: [User, CartProduct, Address] } )
    .then(orders => {
      res.send(orders);
    })
    .catch(next);
});

// Get a single order by order id
router.get('/:id', (req, res, next) => {
  Order.findOne({
    where: { id: req.params.id },
    include: [User, CartProduct, Address]
  })
    .then(order => res.json(order))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Order.create(req.body)
    .then(newOrder => {
      res.status(201).send(newOrder);
    })
    .catch(next);
});

// Edit an order
router.put('/edit/:id', (req, res, next) => {
  Order.findOne({
    where: { id: req.params.id }
  })
    .then(order => order.update(req.body))
    .then(updatedOrder => res.status(204).send(updatedOrder))
    .catch(next);
  // Order.update(req.body, { where: { id: req.params.id }, returning: true
  // })
  //   .then(updatedOrder => {
  //     // console.log(updatedOrder[1][0].dataValues)
  //     res.status(204).send(updatedOrder[1][0].dataValues);
  //   })
  //   .catch(next);
});

module.exports = router;
