'use strict'

const db = require('APP/db')
const Order = require('./order')
const User = require('./user')
const Address = require('./address')
const {expect} = require('chai')

describe('Address tests', () => {

	before('wait for the db', () => db.didSync)
	after('synchronize and clear database', () => db.sync({force: true}));
	describe('Working Associations', () => {

		it('Address belongs to Order', () => {
			let creatingAddress = Address.create({
			billing1: '5',
			billingSt: 'Hanover Sq',
			billingCity: 'NY',
			billingZip: '11111'
			})
			let creatingOrder = Order.create({status: "cart"})
	      return Promise.all([creatingOrder, creatingAddress])
		     	.then(([createdOrder, createdAddress]) => {
		     		return createdAddress.setOrder(createdOrder)
		     	})
	      .then(result => {
	        return Address.findOne({
	          where: {order_id: result.id }
	        });
	      })
	      .then(foundOrder => {
	        expect(foundOrder).to.exist;
	        expect(foundOrder.billingCity).to.equal('NY');
	      });
		})

		it('Address belongs to User', () => {
			let creatingAddress = Address.create({
			billing1: '7',
			billingSt: '7th st',
			billingCity: 'NY',
			billingZip: '10000'
			})
			let creatingUser = User.create({userName: 'nerp', email: 'js@gmail.com', password: 'asd'});
	      return Promise.all([creatingUser, creatingAddress])
		     	.then(([createdUser, createdAddress]) => {
		     		return createdAddress.setUser(createdUser)
		     	})
	      .then(() => {
	        return Address.findOne({
	          where: {billing1: '7' }
	        })
	      })
	      .then(foundAddress => {
	        expect(foundAddress.user_id).to.exist
	        return foundAddress.user_id
	      })
	      .then(user_id => {
	      	return User.findById(user_id)
	      })
	      .then(foundUser => {
	      	expect(foundUser.userName).to.equal('nerp')
	      })
		})

	})

})
