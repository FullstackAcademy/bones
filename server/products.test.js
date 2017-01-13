const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {
	before('wait for the db', () => db.didSync)
  	after('synchronize and clear database', () => db.sync({force: true}));

  	it('POSTs one product', () => {

  	});

  	it('GETs all products', () => {

  	});

  	it('GETs one product', () => {

  	});


  	it('PUTs one product', () => {

  	});

  	it('DELETEs one products', () => {

  	});
  	it('GETS all reviews for a product', () => {

  	});
  	it('GETS one review for a product', () => {

  	})
})