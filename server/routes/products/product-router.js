'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Inventory = db.model('inventory')

const {mustBeLoggedIn, forbidden,} = require('../../auth.filters')

module.exports = require('express').Router()
	.get('/', (req, res, next) => {
		Product.findAll({include: [Inventory]})
		.then(products => {
			res.json(products)
		})
		.catch(next)
	})
	.get('/:productId', (req, res, next) => {
		Product.findById(req.params.productId, {include: [Inventory]})
		.then(product => {
			res.json(product)
		})
		.catch(next)
	})
	.get('/sale/:tag', (req,res,next) => {
		Product.findByTag([req.params.tag, 'sale'], {include: [Inventory]})
		.then(products => {
			res.json(products)
		})
		.catch(next)
	})
	.get('/:tag', (req,res,next) => {
		Product.findByTag(req.params.tag, {include: [Inventory]})
		.then(products => {
			res.json(products)
		})
		.catch(next)
	})
	.post('/'/*, forbidden('only admins can list users')*/,(req, res, next) => {
		Product.create(req.body)
		.then(product => res.status(201).json(product))
		.catch(next)
	})
	.delete('/:productId'/*, forbidden('only admins can list users')*/,(req, res, next) => {
		Product.destroy({
			where: {
				id: req.params.productId
			}
		})
		.then(product => res.status(204).json(product))
		.catch(next)
	})
	.put('/:productId'/*, forbidden('only admins can list users')*/,(req, res, next) => {
		Product.update(req.body, {
			where: {
				id: req.params.productId
			},
			include: [Inventory],
			returning: true
		})
		.spread((numUpated, updatedProductArray) => res.status(201).json(updatedProductArray[0]))
		.catch(next)
	})
