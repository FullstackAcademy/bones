const db = require('APP/db');

const seedUsers = () => db.Promise.map([
  {firstName: 'James', lastName: 'Kim',  email: 'god@example.com', isAdmin: true, password: '1234'},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', isAdmin: false, password: '1234'},
], user => db.model('users').create(user));

const seedReviews = () => db.Promise.map([
  {rating: 5, comment: "This rock is my best (and only) friend"},
  {rating: 2, comment: "It's too loud. I wanted a quieter rock."},
  {rating: 1, comment: "He's no fun."},
], review => db.model('reviews').create(review));

const seedAddress = () => db.Promise.map([
  {street: "1 Holler Lane", city: "Westport", state: "New York", zipcode: "10004"},
  {street: "5 Hanover Square", city: "New York", state: "New York", zipcode: "10004"},
  {street: "75 Wall Street", city: "New York", state: "New York", zipcode: "10004"},
], address => db.model('addresses').create(address));

const seedCategories = () => db.Promise.map([
  {name: "Companion"},
  {name: "Utility"},
  {name: "Decorative"},
  {name: "Miscellaneous"}
], category => db.model('categories').create(category));

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .then(seedAddress)
  .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
