'use strict'

const db = require('APP/db')
const User = db.model('users')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
	.param('id', function (req, res, next, id) {
	  User.scope('orders').findById(id)
	  .then(function (user) {
	    req.requestedUser = user;
	    next();
	  })
	  .catch(next)
	})

	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.scope('orders').findAll()
		.then(users => res.json(users))
		.catch(next))

	.post('/', (req, res, next) => {
		// console.log('req.body', req.body)
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next)
	})

	.get('/:id', mustBeLoggedIn, (req, res, next) =>
	res.json(req.requestedUser))

	.get('/:id/orders', mustBeLoggedIn, (req, res, next) =>
	res.json(req.requestedUser.orders[0]))


	.put('/:id', (req, res, next) => {
		req.requestedUser.update(req.body)
		.then(updatedUser => {
			res.send(updatedUser)
		})
		.catch(next)
	})
	.delete('/:id', function (req, res, next) {
	  req.requestedUser.destroy()
	  .then( () => res.status(204).end())
	  .catch(next);
  });
