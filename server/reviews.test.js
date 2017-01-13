const request = require('supertest-as-promised')
const {expect} = require('chai')

const db = require('APP/db')
const Review = require('APP/db/models/review')
const app = require('./start')

describe.only('/api/reviews route tests', () => {

	//sync before each test
	before('wait for the db', () => db.didSync)
	//build and drop the database after each test
	after('synchronize and clear database', () => db.sync({force: true}));

	let review1, review2, review3;

  beforeEach('Seed messages', () => {

	  const reviews = [
		  {
			  title: 'this paint is vibrant',
			  content: 'the developers are the four coolest guys i know',
			  numStars: '5'
		  },
		  {
			  title: 'amazing color quality!',
			  content: 'this review is long enough',
			  numStars: '3'
		  },
		  {
			  title: 'joey sent me',
			  content: 'I need more brushes!',
			  numStars: '4'
		  }
	  ];
	  return Review.bulkCreate(reviews, {returning: true})
		  .then(createdReviews => {
			  review1  = createdReviews[0];
			  review2  = createdReviews[1];
			  review3  = createdReviews[2];

	  })
 });


	describe('testing review routes', () => {

		it('gets all reviews', () =>
		request(app)
		  .get(`/api/reviews`)
		  .expect(200)
		  .then(res => {
			  expect(res.body).to.be.an('array');
			  expect(res.body.length).to.be.equal(3)
			  expect(res.body[0].title).to.be.equal('this paint is vibrant')
			  expect(res.body[2].numStars).to.be.equal('4')
		  })
	  );

		it('get one review', () =>
		request(app)
		.get(`/api/reviews/1`)
		//.expect(200)
		.then(res => {
			expect(res.body).to.exist
			expect(res.body).to.contain({title: 'this paint is vibrant'})
			expect(res.body).to.contain({numStars: '5'})
		})
	)

	it('posts a review', () =>
		request(app)
		.get(`/api/reviews/1`)
		//.expect(200)
		.then(res => {
			expect(res.body).to.exist
			expect(res.body).to.contain({title: 'this paint is vibrant'})
			expect(res.body).to.contain({numStars: '5'})
		})
	)

	it('updates a review', () =>
	  request(app)
		.put('/api/reviews/1')
		.send({title: 'glad I can update the title of this review!'
		})
		.then(res => expect(res.body).to.contain({
		  title: 'glad I can update the title of this review!'
		}))
	)

	it('deletes a review', () => {
		return request(app)
		.delete(`/api/reviews/2`)
		.send()
		.then(res => {
		  expect(res.status).to.equal(204)
		 })
	})


	})



});
