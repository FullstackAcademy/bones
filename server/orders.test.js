const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/order')
const app = require('./start')

describe('/api/orders route tests', () => {

	before('wait for the db', () => db.didSync)
	after('synchronize and clear database', () => db.sync({force: true}));

	let order1, order2;

  beforeEach('Seed messages', () => {
    const orders = [
      {
      status: 'cart',
      totalCost: 40
    },
    {
      status: 'purchased',
      totalCost: 15.55
    }
  ];
    return Order.bulkCreate(orders, {returning: true})
      .then(createdOrders => {
        order1 = createdOrders[0].id;
        order2 = createdOrders[1].id;
      })


	  // const reviews = [
		//   {
		// 	  title: 'this paint sucks',
		// 	  content: 'get yourself another paint store these guys are crooks',
		// 	  numStars: '2'
		//   },
		//   {
		// 	  title: 'amazing color quality!',
		// 	  content: 'this review is long enough',
		// 	  numStars: '3'
		//   },
		//   {
		// 	  title: 'joeBlow sent me',
		// 	  content: 'I need more brushes!',
		// 	  numStars: '1'
		//   }
	  // ];
    //
	  // return Review.bulkCreate(reviews, {returning: true})
		//   .then(createdReviews => {
		// 	  review1  = createdReviews[0].id;
		// 	  review2  = createdReviews[1].id;
		// 	  review3  = createdReviews[2].id;
    //
	  // })
 });


	describe('testing get routes', () => {

		it ('gets all orders', () =>
		request(app)
		  .get(`/api/orders`)
		  .expect(200)
		  .then(res => {
			  expect(res.body).to.be.an('array');
			  expect(res.body.length).to.be.equal(2)
			  expect(res.body[0].status).to.be.equal('cart')
        expect(res.body[1].status).to.be.equal('purchased')
		  })
		)


    it ('gets a single order', () =>
    request(app)
      .get(`/api/orders/1`)
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.contain({status: 'cart'})
        expect(res.body).to.contain({totalCost: 40})
      })
    )


	})

  describe('testing post routes', () => {

    it ('creates an order', () =>
    request(app)
      .post(`/api/orders`)
      .send({
        status: 'cart',
        totalCost: 500
      })
      .expect(201)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.contain({status: 'cart'})
        expect(res.body).to.contain({totalCost: 500})
      })
    )

  })

  describe('testing put routes', () => {

    it ('updates an order', () =>
    request(app)
      .put(`/api/orders/1`)
      .send({
        totalCost: 37
      })
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.contain({status: 'cart'})
        expect(res.body).to.contain({totalCost: 37})
      })
    )

  })

  describe('testing delete routes', () => {

    it ('deletes an order', () =>
    request(app)
      .delete(`/api/orders/2`)
      .send()
      .then(res => {
        expect(res.status).to.equal(204)
      })
    )

  })



	  });
