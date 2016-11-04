const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Product = require('APP/db/models/product');
const User = require('APP/db/models/user');
const Review = require('APP/db/models/review');
const app = require('./start');

describe('/api/reviews', () => {

  // Create products for database
  const products = [
            {
              id: 1, 
              name: 'Grandfather\'s gold watch',
              quantity: 1,
              description: 'Brad\'s grandfather gave this watch to Brad on his deathbed. Soooooo sad :(' ,
              price: 3000000,
              categories: ['shiny', 'tragic'],
              photoURL: 'http://luxurylaunches.com/wp-content/uploads/2012/11/pharrells-gshock-gold-watch.jpg'
            },
            {
              id: 2,
              name: 'Dog collar',
              quantity: 4,
              description: 'Angie wore these around her wrists and ankles at a naughty party one night' ,
              price: 1000,
              categories: ['pointy', 'tight'],
              photoURL: 'http://luxurylaunches.com/wp-content/uploads/2012/11/pharrells-gshock-gold-watch.jpg'
            }
  ]
  
  let watch, dogCollar
  const makeProducts = () =>
    db.Promise.map(products,
      product => {
        return Product.create(product)
      })
    .then(products => {
      watch = products[0]
      dogCollar = products[1]
    })

  // create a user for the database

  const users = [
          {   
              email:"alice@wonderland.com",
              firstName: 'alice',
              lastName: 'wonderland',
              username:'throughthelookingglass',
          },
  ]

  let user1
  const makeUsers = () =>
    db.Promise.map(users,
      user => {
        return User.create(user)})
    .then(users => {
      user1 = users[0]
    })
    
  // Create reviews for database
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

  let three, four, five
  const makeReviews = () =>
    db.Promise.map(reviews,
      review => Review.create(review))
    .then(reviews => {
      three = reviews[0]
      four = reviews[1]
      five = reviews[2] })

  // Sync database and create products, users, and reviews
  before('sync database & make reviews', () =>
    db.didSync
      .then(() => Product.destroy({truncate: true, cascade: true, force: true}))
      .then(makeProducts)
      .then(makeUsers)
      .then(makeReviews)
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
