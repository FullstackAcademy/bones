const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('../../start')

//USER authentication not implemented yet.

describe('Products Route:', function () {
  before('wait for the db', () => db.didSync)

  before(() => {
    Product.bulkCreate([{
      name: 'Pokemon Dog Costume',
      description: 'Cute, soft, yellow one piece Pikachu costume for your pup.',
      price: '30.00',
      imageURL: 'wYu7cQs.jpg',
      tags: ['pokemon', 'costume', 'halloween', 'pikachu', 'dog']
    },
    {
      name: 'Pokemon Woman Costume',
      description: 'Cute, soft, yellow one piece Pikachu costume for ladies.',
      price: '60.00',
      imageURL: 'xxxxxxx.jpg',
      tags: ['pokemon', 'costume', 'halloween', 'pikachu', 'woman']
    }])
  })

  //Non-Admin routes
  describe('GET /products', () => {

    it('returns all products in the DB', () => {
      request(app)
      .get('/api/products')
      .expect(200)
      .expect(function (res) {
        expect(res.body).to.be.an.instanceOf(Array)
        expect(res.body.length).to.equal(2)
        expect(res.body[1].name).to.equal('Pokemon Woman Costume')
      })
    })

    it('returns the correct product', () => {
      request(app)
      .get('/api/products/1')
      .expect(200)
      .expect(function (res) {
        expect(res.body).to.be.an.instanceOf(Object)
        expect(res.body.length).to.equal(1)
        expect(res.body.name).to.equal('Pokemon Dog Costume')
      })
    })
  })

  //Admin routes
  describe('POST /products', () => {
    it('creates a new product', () => {
      request(app)
      .post('/api/products')
      .send({
        name: 'Panda Dog Costume',
        description: 'Cuddly black and white one piece costume for your pup.',
        price: '35.00',
        imageURL: 'yyyyyy.jpg',
        tags: ['panda', 'costume', 'halloween', 'dog']
      })
      .expect(201, res => {
        expect(res.body.name).to.equal('Panda Dog Costume');
      })
    })

    it('does not create a new product without a name', function () {
      request(app)
      .post('/api/products')
      .send({
        description: 'Cuddly black and white one piece costume for your pup.',
        price: '35.00',
        imageURL: 'yyyyyy.jpg',
        tags: ['panda', 'costume', 'halloween', 'dog']
      })
      .expect(500)
    });
  })

  describe('DELETE /products/:productId', () => {
    it('deletes a product', () => {
      request(app)
      .delete('/api/products/1')
      .expect(204, res => {
        expect(res.body.id).to.equal(1)
      })
    })

    it('removes the product from the DB', () => {
      request(app)
      .get('/api/products/1')
      .expect(500)
    })
  })

  describe('PUT /products', () => {
    it('updates a product', () => {
      request(app)
      .put('/api/products/2')
      .send({
        price: '600.00'
      })
      .expect(201, res => {
        expect(res.body.price).to.equal('600.00')
      })
    })
  })

})


