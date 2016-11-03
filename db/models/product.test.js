'use strict'

const db = require('APP/db')
const Product = require('./product')
const {expect} = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.didSync)

   it('has a name, price, quantity, and category(ies)', () =>
     Product.create({
       name: `Hillary's Pantsuit`,
       price: 350.00,
       categories: ['Clothing']
     }).then(product =>
       expect(product.dataValues).to.contain.all.keys(['name', 'price', 'categories'])
     )
   )

   it('requires a name', () =>
     expect(Product.create({price: 10.00, categories:['Hair']})).to.be.error
   )

   it('requires a price', () =>
     expect(Product.create({name: `Robert Downey Jr's Iron Man Mask`, categories: ['Comics', 'Costume']})).to.be.error
   )

   it('requires a category', () =>
     expect(Product.create({name: `Parks & Rec Pilot Script`, price: 15.99, categories:['Script']})).to.be.error
   )

   it('adds all categories included', () =>
     Product.create({
        name: `Elijah Woods's Frodo Ring`,
        price: 13000,
        categories:['Film', 'Fantasy']
      })
     .then(createdProduct => expect(createdProduct.categories).to.have.lengthOf(2).that.is.an('array')
     )
   )

   it('has a default quantity of 1', () =>
     Product.create({
       name: `Emma Watson's Hermione Wig`,
       price: 175.00,
       category: ['Costume', 'Hair']
     }).then(product =>
       expect(product.quantity).to.eql(1)
     )
   )

   it('has a default placeholder image', () =>
     Product.create({
       name: `Kate Winslet's Titanic Necklace`,
       price: 15000.00
     }).then(product =>
       expect(product.photoURL).to.eql('http://placehold.it/250x150')
     )
   )

   it('adds image url link', () =>
     Product.create({
       name: `Steve Jobs's First Mac`,
       price: 350000.00,
       photoURL: `http://images.pcworld.com/news/graphics/206686-7-mac-sales_original.jpg`
     }).then(product =>
       expect(product.photoURL).to.eql('http://images.pcworld.com/news/graphics/206686-7-mac-sales_original.jpg')
     )
   )

   it('adds a description if included', () =>
     Product.create({
       name: `Marie Antoinette's Slice of Cake`,
       price: 14300.00,
       categories: ['Food'],
       description: "This elegant slice of cake is sure to delight the senses. Consume at your own risk."
     }).then(product =>
       expect(product.description).to.eql("This elegant slice of cake is sure to delight the senses. Consume at your own risk.")
     )
   )
   //NOTE: this suite needs a test for the avg_rating instance method
 })
