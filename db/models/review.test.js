
const db = require('APP/db')
const Review = require('./review')
const Product = require('./product')
const User = require('./user')
const expect = require('chai').expect;

describe('Review', () => {
 before('wait for the db', () => db.didSync)

 describe('Working Associations', () => {
   it('Reviews Belong to Product', () => {
     let creatingProduct = Product.create({title: "Test"});
     let creatingReview = Review.create({title: 'Review Test 1', content: 'this is some content', numStars: '3'})
     return Promise.all([creatingProduct, creatingReview])
     	.then(([createdProduct, createdReview]) => {
     		return createdProduct.addReview(createdReview)
     	})
     	.then(() => {
     		return Review.findOne({
     			where: {title: 'Review Test 1'}
     		})
     	})
     	.then(foundReview => {
     		expect(foundReview.product_id).to.exist
     		return foundReview.product_id
     	})
     	.then(product_id => {
     		return Product.findById(product_id)
     	})
     	.then(foundProduct => {
     		expect(foundProduct.title).to.equal('Test')
     	})

   })

   it("Reviews Belongs to User", () => {
     let creatingUser = User.create({userName: "Test", email: 'skuo314@gmail.com', password: 'password'});
     let creatingReview = Review.create({title: 'Review Test 2', content: 'this is some content', numStars: '3'})
     return Promise.all([creatingUser, creatingReview])
     	.then(([createdUser, createdReview]) => {
     		return createdUser.addReview(createdReview)
     	})
     	.then(() => {
     		return Review.findOne({
     			where: {title: 'Review Test 2'}
     		})
     	})
     	.then(foundReview => {
     		expect(foundReview.user_id).to.exist
     		return foundReview.user_id
     	})
     	.then(user_id => {
     		return User.findById(user_id)
     	})
     	.then(foundUser => {
     		expect(foundUser.userName).to.equal('Test')
     	})

   })
 })

 describe('Working Validation', () => {
   it("Fails if content < 10 characters", () => {
     return Review.create({title: 'Review Test', content: 'short', numStars: '3'})
     .then(review => {
     	expect(review).to.not.exist
     })
     	.catch(result => {
     		console.log('ran')
     		expect(result).to.be.an.instanceOf(Error)
     		expect(result.message).to.contain('Reviews must be at least 10 characters long')
     	})

   })
  it("Passes if content >= 10 characters", () => {
		 return Review.create({title: 'Review Test', content: 'this is a lot of content', numStars: '3'})
		 	.then(result => {
		 		expect(result).to.exist
		 	})

   })
 })

})
