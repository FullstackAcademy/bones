'use strict'

const db = require('APP/db')
const User = db.model('users')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

// router
// })
// ;

module.exports = require('express').Router()
	.param('id', function (req, res, next, id) {
	  User.findById(id)
	  .then(function (user) {
	  //  if (!user) throw HttpError(404);
	    req.requestedUser = user;
	    next();
	  })
	  .catch(next)
	})
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
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
	})
