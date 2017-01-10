'use strict'

const db = require('APP/db')
const Order = require('./order')
const {expect} = require('chai')

describe('Order', () => {

  before('wait for the db', () => db.didSync)

  //beforeEach get user models, seed orders
  describe('belongs to order', () => {
    it('belongs to registered order or guest order', () =>
      Order.create({ password: 'ok' }) // set up fake order then test it
        .then(order => order.authenticate('ok'))
        .then(result => expect(result).to.be.true))
  })

  describe('contains line items capturing product detail', () => {
    it('captures product price', () =>
      Order.create({ password: 'ok' })
        .then(order => order.authenticate('ok'))
        .then(result => expect(result).to.be.true))

    it('captures product ID', () =>
      Order.create({ productId: 1 })
        .then(order => order.productId)
        .then(result => expect(result).to.be.false)) // to be 1

	it('captures product order quantity', () =>
		{}
	)
})

  describe('order status', () => {
	it('price does not change', () => {}
	//   User.create({ password: 'ok' })
	// 	.then(order => order.authenticate('ok'))
	// 	.then(result => expect(result).to.be.true))
	)
	it('can have cart or purchased status', () =>
	{}
	)
	});

})

// Associations: "must belong to a user or guest session"
// Must contain line items that capture price, current product ID and quantity
// if user completes an order that order should keep the price of the item at the time when they checked out even if the price of the product later changes
