/*eslint-disable camelcase */
const db = require('APP/db');
const chalk = require('chalk');

const seedUsers = () => db.Promise.each([
  {firstName: 'James', lastName: 'Kim',  email: 'god@example.com', isAdmin: true, password: '1234'},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', isAdmin: false, password: '1234'},
], user => db.model('users').create(user));

const seedReviews = () => db.Promise.each([
  {rating: 5, comment: 'This rock is my best (and only) friend', user_id: 1, rock_id: 1},
  {rating: 2, comment: 'It\'s too loud. I wanted a quieter rock.', user_id: 1, rock_id: 1},
  {rating: 1, comment: 'He\'s no fun.', user_id: 2, rock_id: 2},
], review => db.model('reviews').create(review));

const seedAddress = () => db.Promise.each([
  {street: '1 Holler Lane', city: 'Westport', state: 'New York', zipcode: '10004', user_id: 1},
  {street: '5 Hanover Square', city: 'New York', state: 'New York', zipcode: '10004', user_id: 2},
  {street: '75 Wall Street', city: 'New York', state: 'New York', zipcode: '10004', user_id: 1},
], address => db.model('addresses').create(address));

const seedCategories = () => db.Promise.each([
  {name: 'Companion'},
  {name: 'Utility'},
  {name: 'Decorative'},
  {name: 'Miscellaneous'}
], category => db.model('categories').create(category));

const seedRocks = () => db.Promise.each([
  {name: 'pebble', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 9.99, weight: 10, color: 'black', description: 'This rock is best companion to your daily life', stock: 2, category_id: 1},
  {name: 'beach', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 9.99, weight: 5, color: 'brown', description: 'This rock is bathed by the sun at the beach', stock: 1, category_id: 3},
  {name: 'super rock', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 99.99, weight: 2, color: 'white', description: 'This rock is how Super man got his power', stock: 4, category_id: 3},
], rock => db.model('rocks').create(rock));

const seedTags = () => db.Promise.each([
  {name: 'farm-raised'},
  {name: 'smooth'}
], tag => db.model('tags').create(tag));

const seedRockTags = () => db.Promise.each([
  {rock_id: 1, tag_id: 1},
  {rock_id: 1, tag_id: 2}
], rockTags => db.model('rockTags').create(rockTags));

const seedOrders = () => db.Promise.each([
  {status: 'in-cart', date: '2017-01-10 14:35:38.811-05', user_id: 1, address_id: 1},
  {status: 'cancelled', date: '2017-01-10 14:35:38.811-05', user_id: 2, address_id: 2},
  {
    status: 'in-cart', date: '2017-01-10 14:35:38.811-05', user_id: 1, address_id:1
  }
], order => db.model('orders').create(order));

const seedCartProducts = () => db.Promise.each([
  {quantity: 5, order_id: 1, rock_id: 1},
  {quantity: 99, order_id: 2, rock_id: 2},
  {quantity: 9, order_id: 1, rock_id: 1},

], cartProduct => db.model('cartProducts').create(cartProduct));

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .then(seedRocks)
  .then(rocks => console.log(`Seeded ${rocks.length} rocks OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .then(seedTags)
  .then(tags => console.log(`Seeded ${tags.length} tags OK`))
  .then(seedRockTags)
  .then(rockTags => console.log(`Seeded ${rockTags.length} rockTags OK`))
  .then(seedAddress)
  .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedCartProducts)
  .then(cartProduct => console.log(`Seeded ${cartProduct.length} cartProduct OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
