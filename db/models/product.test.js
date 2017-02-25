'use strict'

const db = require('APP/db')
const Product = require('./product')
const {expect} = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.didSync)

  let testProduct;

  describe('Instance Methods', () => {
    beforeEach(() => {
      testProduct = Product.build({
        name: 'Light Saber',
        category: 'Toy',
        tag: ['Science'],
        imageUrl: 'default.jpg',
        price: 10,
        description: 'Weapon of the Jedi',
        quantity: 0
      })
    })

    it('returns "Currently Unavailable" if quantity is zero', () => {
      return testProduct.save()
        .then(product => {
          const result = product.availablity();
          return expect(result).to.equal('Currently Unavailable');
        })
    })

    it('category is valid', () => {
      const validCategories = ['Toy', 'Video Game', 'Board Game', 'Card Game'];
      return testProduct.save()
        .then(product => {
          const validity = validCategories.includes(product.category);
          return expect(validity).to.be.true;
        })
    })

    it('tag is an array of values', () => {
      return testProduct.save()
        .then(product => expect(Array.isArray(product.tag)).to.be.true);
    })

  })
})
