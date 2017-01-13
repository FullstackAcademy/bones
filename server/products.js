'use strict'

const db = require('APP/db')
const Product = db.model('products')

module.exports = require('express').Router()
	.param('id', (req, res, next, id) => {
		Product.findById(id)
		.then(product => {
			req.requestedProduct = product
			next()
		})
		.catch(next)
	})
	.post('/', (req, res, next) => {
		Product.create(req.body)
		.then(product => res.status(201).json(product))
		.catch(next)
	})
	.get('/:id', (req, res, next) => {
		res.json(req.requestedProduct)
	})
	.get('/', (req, res, next) => {
		Product.findAll()
		.then(products => res.json(products))
		.catch(next)	
	})
	.put('/:id', (req, res, next) => {
		req.requestedProduct.update(req.body)
		.then(updatedProduct => {
			res.send(updatedProduct)
		});
	})
	.delete('/:id', (req, res, next) => {
		req.requestedProduct.destroy()
		.then(() => res.status(204).end())
		.catch(next);
	})
	// .get('/:id/reviews', (req, res, next) => {

	// })
	// .get('/:id/reviews/:reviewid', (req, res, next) => {

	// })
