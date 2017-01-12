'use strict'

const db = require('APP/db')
const Product = require('./product')
const { expect } = require('chai')

// -Must have title, description, price, and inventory quantity
// -Must belong to at least one category
// -If there is no photo, there must be a placeholder photo used

describe('Product tests', () => {

		let testProduct;
		before('wait for the db', () => db.didSync)
		after('synchronize and clear database', () => db.sync({force: true}));

		describe('product tests', () => {
			beforeEach(function() {
				return Product.create({
					title: 'Ben Semi-Gloss Purple',
					brand: 'BenjaminMoore',
					category: 'paint',
					description: 'On a sunday morning, imbibe yourself in our spendid colors with amazing catalogue copy',
					unitPrice: 24.99,
					inventoryQuantity: 2
				})
				.then(createdProduct => {
					testProduct = createdProduct
				})
				.catch(console.error);
			});

			    it('has title', () => expect(testProduct.title).to.exist);

			    it('has description', () => expect(testProduct.description).to.exist);

				it('has unitPrice', () => expect(testProduct.unitPrice).to.exist);

				it('has inventoryQuantity', () => expect(testProduct.inventoryQuantity).to.exist);

				it('has a category', () => expect(testProduct.category).to.exist);

				it('has a photo', () => expect(testProduct.photoUrl).to.exist);

		});

});
