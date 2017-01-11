'use strict'

const db = require('APP/db')
const LineItem = require('APP/db').LineItem
const Product = require('APP/db').Product
const Order = require('./order')
const {expect} = require('chai')

describe('Order tests', () => {

	before('wait for the db', () => db.didSync)

	//beforeEach get user models, seed orders
	describe('create new order with line item', () => {

		it('belongs to a user or guest session', () => {

		const productPromise = Product.create({
			title: 'Ben Semi-Gloss Purple',
			brand: 'BenjaminMoore',
			category: 'paint',
			description: 'Every sunday morning, imbibe yourself in our spendlid colors with amazing catalogue copy',
			unitPrice: 24.99,
			inventoryQuantity: 2
		})

	  	const lineItemPromise = LineItem.create({
			productDetail: product.title,
			count: 3,
			unitCost: product.unitPrice,
			subtotalCost: product.unitPrice * 3,
			productId: product.id
		})

		const userPromise = User.create({
			password: 'ok',
			email: 'testingMe@gmail.com',
			userName: 'smurfMan'
		})

		// create the product and user, then the lineItem. then create the Order.

		Promise.all(productPromise, lineItemPromise, userPromise)
		.then ( resultsArray => {
			Order.create({
				customer: resultsArray[2],
				lineItemDetails: resultsArray[1],

			})
		})


      })


		it('totals the cost', () => {
			Order.create({
				lineItems: [lineItem],
				userId: 1,
				status: 'cart',
			}) // set up fake order then test it
			.then(createdOrder => {
			  expect(createdOrder.totalCost).to.be.above(0)
			})
			.catch(console.error)
		})

  })
  });

//   describe('contains line items capturing product detail', () => {
//     it('captures product price', () =>
//       Order.create({ password: 'ok' })
//         .then(order => order.authenticate('ok'))
//         .then(result => expect(result).to.be.true))

//     it('captures product ID', () =>
//       Order.create({ productId: 1 })
//         .then(order => order.productId)
//         .then(result => expect(result).to.be.false)) // to be 1

//  it('captures product order quantity', () =>
//    {}
//  )
// })

//   describe('order status', () => {
//  it('price does not change', () => {}
//  //   User.create({ password: 'ok' })
//  //  .then(order => order.authenticate('ok'))
//  //  .then(result => expect(result).to.be.true))
//  )
//  it('can have cart or purchased status', () =>
//  {}
//  )
//  });


// Associations: "must belong to a user or guest session"
// // Must contain line items that capture price, current product ID and quantity
// // if user completes an order that order should keep the price of the item at the time when they checked out even if the price of the product later changes
//
// //#Order
// /*
// -Orders  must belong to a user OR guest session (authenticated vs unauthenticated)
// -Orders must contain line items that capture the price, current product ID and quantity
// -If a user completes an order, that order should keep the price of the item at the time when they checked out even if the price of the product later changes
