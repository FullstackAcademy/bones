'use strict'

const db = require('APP/db')
const Product = require('./product')
const LineItem = require('./lineItem')
const Order = require('./order')
const User = require('./user')
const {expect} = require('chai')

describe('Order suite', () => {

	before('wait for the db', () => db.didSync)
	after('synchronize and clear database', () => db.sync({force: true}));

	describe('Working Associations', () => {
		it('Order belongs to User', () => {
			let creatingUser = User.create({
			userName: 'Newman',
			password: 'mailman',
			email: 'jokes@gmail.com'
			})
			let creatingOrder = Order.create({})
				return Promise.all([creatingUser, creatingOrder])
		     	.then(([createdUser, createdOrder]) => {
		     		return createdUser.addOrder(createdOrder)
		     	})
		     	.then(result => {
		     		return Order.findOne({
		     			where: {
		     				user_id: result.id
		     			}
		     		})
		     	})
		     	.then(foundOrder => {
		     		expect(foundOrder.user_id).to.exist
		     	})
		})

		// it('Order customerType changes from guest to registered', () => {
		// 	let creatingUser = User.create({
		// 	userName: 'Cosmo',
		// 	password: 'Kramer',
		// 	email: 'nyc@gmail.com'
		// 	})
		// 	let creatingOrder = Order.create({customerType: 'guest'})
		// 		return Promise.all([creatingUser, creatingOrder])
		//      	.then(([createdUser, createdOrder]) => {
		//      		return createdUser.addOrder(createdOrder)
		//      	})
		//      	.then(result => {
		//      		return Order.findOne({
		//      			where: {
		//      				user_id: result.id
		//      			}
		//      		})
		//      	})
		//      	.then(foundOrder => {
		//      		expect(foundOrder.user_id).to.exist
		//      		expect(foundOrder.customerType).to.equal('guest')
		//      		return foundOrder.update({
		//      			customerType: 'registered'
		//      		})
		//      	})
		//      	.then(updatedOrder => {
		//      		expect(updatedOrder.customerType).to.equal('registered')
		//      	})
		// })
	})

})
