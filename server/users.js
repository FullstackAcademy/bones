/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const Order = db.model('orders');
const User = db.model('users');
const CartProduct = db.model('cartProducts');
const Address = db.model('addresses');
const Rocks = db.model('rocks');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');
const router = require('express').Router();



router.get('/', forbidden('only admins can list users'), (req, res, next) =>
	User.findAll()
	 .then(users => res.json(users))
	 .catch(next));

router.post('/', (req, res, next) =>
	User.create(req.body)
	 .then(user => res.status(201).json(user))
	 .catch(next));

router.get('/:id', mustBeLoggedIn, (req, res, next) =>
	User.findById(req.params.id)
	 .then(user => res.json(user))
	 .catch(next));

router.put('/edit/:id', (req, res, next) => {
	User.update(req.body, { where: { id: req.params.id }, returning: true })
	.then(updatedUser => {
    res.status(204).send(updatedUser[1][0].dataValues);

  })
  .catch(next);
});

// Get all orders for one user
router.get('/:userId/orders', (req, res, next) => {
  Order.findOne({
    where: { user_id: req.params.userId },
    include: [{model: CartProduct, include:[{model:Rocks}]}]
  })
    .then(order => res.json(order))
    .catch(next);
});

module.exports = router;