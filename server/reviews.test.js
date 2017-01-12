const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Review = require('APP/db/models/review')
const app = require('./start')

describe('/api/reviews route tests', () => {

	before('wait for the db', () => db.didSync)
	after('synchronize and clear database', () => db.sync({force: true}));

	let review1, review2, review3;

  beforeEach('Seed messages', () => {

	  const reviews = [
		  {
			  title: 'this paint sucks',
			  content: 'get yourself another paint store these guys are crooks',
			  numStars: '2'
		  },
		  {
			  title: 'amazing color quality!',
			  content: 'this review is long enough',
			  numStars: '3'
		  },
		  {
			  title: 'joeBlow sent me',
			  content: 'I need more brushes!',
			  numStars: '1'
		  }
	  ];

	  return Review.bulkCreate(reviews, {returning: true})
		  .then(createdReviews => {
			  review1  = createdReviews[0].id;
			  review2  = createdReviews[1].id;
			  review3  = createdReviews[2].id;

	  })
 });


	describe('testing get routes', () => {
		it ('gets all reviews', () =>
		request(app)
		  .get(`/api/reviews`)
		  .expect(200)
		  .then(res => {
			  expect(res.body).to.be.an('array');
			  expect(res.body.length).to.be.equal(3)
			  expect(res.body[0].title).to.be.equal('this paint sucks')
		  })
		)
	})

	  });
