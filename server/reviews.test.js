const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Review = require('APP/db/models/review');
const app = require('./start');

describe('/api/reviews', () => {
  const reviews = [
          {
            stars: 3,
            text: 'It was the worst thing EVER.',
            product_id: 1,
            user_id: 2
          },
          {
            stars: 4,
            text: 'I loved so much I would marry it if such things were permitted legally!',
            product_id: 1,
            user_id: 1
          },
          {
            stars: 0,
            text: 'It was okay, I guess. Not reall what I expected given the images',
            product_id: 2,
            user_id: 1
          }
  ]
  const [three, four, zero]
    = reviews

  before('sync database & make products', () =>
    db.didSync
      .then(() => Review.destroy({where:{}}))
      .then(() => db.Promise.map(reviews,
        review => Review.create(review)
      ))
  )


  it('GET / lists all reviews', () =>
    request(app)
      .get(`/api/reviews`)
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length(reviews.length)
        const [
          gotThree,
          gotFour,
          gotZero ] = res.body
        expect(gotThree).to.contain.all.keys(['stars', 'text', 'product_id', 'user_id'])
        expect(gotFour).to.contain.all.keys(['stars', 'text', 'product_id', 'user_id'])
        expect(gotZero).to.contain.all.keys(['stars', 'text', 'product_id', 'user_id'])
      })
  )

  it('POST / creates a review', () =>
      request(app)
        .post('/api/reviews')
        .send({
          stars: 5,
          text: 'The best celebrity memoribilia 1 have have ever bought. Well worth the money!',
          product_id : 2,
          user_id : 2
        })
        .expect(201)
  )

  it('GET /:reviewId gets a single review', () =>
     request(app)
     .get('/api/reviews/4')
     .expect(200)
     .then(res => {
        expect(res.body).to.be.an('object')
        expect(res.body.stars).to.equal(5)
        expect(res.body.product_id).to.equal(2)
     }
     )
  )

  it('put /:reviewId updates a review', () =>
      request(app)
        .put('/api/reviews/4')
        .send({
          stars: 0,
          text: 'Nevermind, I actually HATE IT'
        })
        .expect(201)
        .then( () =>
          Review.findById(4)
          .then(review => {
            expect(review).to.be.an('object')
            expect(review.stars).to.equal(0)
            expect(review.text).to.equal('Nevermind, I actually HATE IT')
            expect(review.product_id).to.equal(2)
          })
              )
  )

  it('DELETE /:reviewId removes a review', () =>
      request(app)
        .delete('/api/reviews/4')
        .expect(204)
        .then(() => {
          Review.findById(4)
          .then(review => {
            expect(review).to.be.null;
          })
        })
  )

  it('GET /products/:productId get all reviews associated with a product', () =>
    request(app)
    .get('/api/reviews/products/1')
    .expect(200)
    .then(res => {
      expect(res.body).to.have.length(2)
    })
  )

  it('GET /user/:userId get all reviews associated with a user', () =>
    request(app)
    .get('/api/reviews/users/2')
    .expect(200)
    .then(res => {
      expect(res.body).to.be.have.length(1)
      expect(res.body[0].stars).to.equal(3)
      expect(res.body[0].text).to.equal('It was the worst thing EVER.')
    })
  )
})
