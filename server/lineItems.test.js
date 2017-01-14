const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const LineItem = require('APP/db/models/lineItem')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/orders route tests', () => {

	before('wait for the db', () => db.didSync)
	after('synchronize and clear database', () => db.sync({force: true}));

	let line1, line2;
	let product1, product2, product3;


  beforeEach('Seed messages', () => {
    const lines = [{},{}];
		const products= [
			{
				title: "hey I'm product1",
				unitPrice: 21
			},
			{
				title: "hey I'm product2",
				unitPrice: 11
			},
			{
				title: "hey I'm product3",
				unitPrice: 999
			}
		]

		 return Product.bulkCreate(products, {returning: true})
		.then(createdProducts=>{
			product1 = createdProducts[0];
			product2 = createdProducts[1];
			product3 = createdProducts[2];
    })
    .then(()=>{
      LineItem.bulkCreate(lines, {returning: true})
      .then(createdLineItems => {
        line1 = createdLineItems[0];
        line2 = createdLineItems[1];
      })
    })
    .then(()=>
			Product.findById(1)
    )
		.then(res=>{
      res.addLineItems([1,2])
    })
    .then(()=>
     Product.findById(2))
    .then(res=> res.addLineItem(3))




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

		it ('gets all lineItems', () =>
		request(app)
		  .get(`/api/lineItems`)
		  .expect(200)
		  .then(res => {
			  expect(res.body).to.be.an('array');
			  expect(res.body.length).to.be.equal(2)
			  // expect(res.body[0].status).to.be.equal('cart')
        // expect(res.body[1].status).to.be.equal('purchased')
		  })
		)


    it ('gets a single line', () =>
    request(app)
      .get(`/api/lineItems/1`)
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('object');
        // expect(res.body).to.contain({status: 'cart'})
        // expect(res.body).to.contain({totalCost: 40})
      })
    )


	})

  describe('testing post routes', () => {

    it ('creates a line', () =>
    request(app)
      .post(`/api/LineItems`)
      .send(
				{})
      .expect(201)
      .then(res => {
        expect(res.body).to.be.an('object');
      })
    )

  })

  describe('testing put routes', () => {

    it ('updates a line', () =>
    request(app)
      .put(`/api/lineItems/1`)
      .send({
        count: 1000
      })
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.contain({count: 1000})
      })
    )

  })

  describe('testing delete routes', () => {

    it ('deletes a line', () =>
    request(app)
      .delete(`/api/lineItems/1`)
      .send()
      .then(res => {
        expect(res.status).to.equal(204)
      })
    )

  })



	  });
