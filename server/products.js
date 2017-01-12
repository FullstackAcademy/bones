'use strict'

const db = require('APP/db')
const Product = db.model('products')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
	.param('id', (req, res, next, id) {
		Product.findById(id)
		.then(product => {
			req.requestedProduct = product
			next()
		})
		.catch(next)
	})
	.get('/', (req, res, next) => {
		
	})
	.get('/:id', (req, res, next) => {

	})
	.post('/:id', (req, res, next) => {

	})
	.put('/:id', (req, res, next) => {

	})
	.delete(':/id', (req, res, next) => {

	})