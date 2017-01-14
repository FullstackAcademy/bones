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
	.param('type', (req, res, next, type)=>{
			Product.findAll({
				where: {
					category: type
				}
			})
			.then(categoryProducts =>{
				req.categoryProducts = categoryProducts
				next()
			})
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
	.get('/category/:type', (req, res, next)=>{
			res.json(req.categoryProducts)
	})
	.put('/:id', (req, res, next) => {
		req.requestedProduct.update(req.body)
		.then(updatedProduct => {
			res.json(updatedProduct)
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
