/*eslint-disable camelcase */
const db = require('APP/db');
const chalk = require('chalk');

const seedUsers = () => db.Promise.each([
  {firstName: 'James', lastName: 'Kim',  email: 'god@example.com', isAdmin: true, password: '1234'},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', isAdmin: false, password: '1234'},
  {firstName: 'Ted', lastName: 'Man', email: 'ted@ted.gov', isAdmin: false, password: '1234'},
  {firstName: 'Win', lastName: 'Ston', email: 'winston@winston.gov', isAdmin: false, password: '1234'},
  {firstName: 'Ben', lastName: 'Jamin', email: 'Ben@Ben.gov', isAdmin: false, password: '1234'},
], user => db.model('users').create(user));

const seedReviews = () => db.Promise.each([
  {rating: 5, comment: 'This rock is my best (and only) friend', user_id: 1, rock_id: 1},
  {rating: 2, comment: 'It\'s too loud. I wanted a quieter rock.', user_id: 1, rock_id: 1},
  {rating: 1, comment: 'He\'s no fun.', user_id: 2, rock_id: 2},
], review => db.model('reviews').create(review));

const seedAddress = () => db.Promise.each([
  {street: '1 Holler Lane', city: 'Westport', state: 'New York', zipcode: '10004', user_id: 1, defaultAddress: true},
  {street: '5 Hanover Square', city: 'New York', state: 'New York', zipcode: '10004', user_id: 2, defaultAddress: true},
  {street: '75 Wall Street', city: 'New York', state: 'New York', zipcode: '10004', user_id: 3, defaultAddress: true},
  {street: '28 Chestnut Ave', city: 'Philadelphia', state: 'Pennsylvania', zipcode: '29478', user_id: 4, defaultAddress: true},
  {street: '39 Almond Lane', city: 'Westport', state: 'Connecticut', zipcode: '06880', user_id: 5, defaultAddress: true},
], address => db.model('addresses').create(address));

const seedCategories = () => db.Promise.each([
  {name: 'companion'},
  {name: 'utility'},
  {name: 'decorative'},
  {name: 'miscellaneous'}
], category => db.model('categories').create(category));

const seedRocks = () => db.Promise.each([
  {name: 'pebble', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 9.99, weight: 10, color: 'black', description: 'This rock is best companion to your daily life', stock: 9, category_id: 1},
  {name: 'beach', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 9.99, weight: 5, color: 'brown', description: 'This rock is bathed by the sun at the beach', stock: 22, category_id: 3},
  {name: 'super rock', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 99.99, weight: 2, color: 'white', description: 'This rock is how Super man got his power', stock: 24, category_id: 3},
  {name: 'pretty pebble', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSg_I8v4p6x9Z7GdN9IlQsFRQpB69A4PIVfVdxaL8J_cvMhY3xr6Q', price: 256, weight: 4, color: 'green', description: 'popular rock. *Moss sold separately', stock: 14, category_id: 3},
  {name: 'blue ivy', photo: 'https://secure.polyvoreimg.com/cgi/img-thing/size/l/tid/56996430.jpg', price: 111, weight: 11, color: 'blue', description: 'Perfect companion for karoake nights.', stock: 14, category_id: 1},
  {name: 'the Rock', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUW2RbLQe4cq72HsvHcW4tmEhHiCU_VSKkQL2-vrqy1j3ZONT5Tw', price: 4123938, weight: 250, color: 'human', description: 'Great for hosting bar mitzvahs!', stock: 2, category_id: 4},
  {name: 'pebble mat', photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv6warg1lPbE-QmmGUlHJt9BVEHPqOa-DvdFuwLpuVakDchTRX', price: 2467, weight: 40, color: 'grey', description: 'Single rock that looks like multiple rocks. Useful as a bathroom mat.', stock: 2, category_id: 2},
  {name: 'pretend pebble', photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRue3gtmwTGDNDcG3cUrf3l2JaRKcx4Klo7y9U8M4U7dhl81GmO1A', price: 99, weight: 1, color: 'blue', description: 'Not an actual rock, but a drawing of one. Illustrated by a real child.', stock: 4, category_id: 3},
  {name: 'rockstick', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3D7d7eUEvK4L2hD8esvPuYFtHAAm7w_FWabBHsSonzAh9EPi-', price: 300, weight: 1, color: 'blue', description: 'Ever wanted a pet that you can eat easily?', stock: 14, category_id: 1},
  {name: 'rockstick', photo: 'http://www.pop-rocks.com/wp-content/uploads/2015/09/pop-rocks-design-and-fun.png', price: 90, weight: 1, color: 'red', description: 'Edible but also fun for colorful bubble baths.', stock: 9, category_id: 2},
  {name: 'usbrock', photo: 'http://www.redferret.net/wp-content/uploads/2013/01/USB-Pet-Rock.jpg', price: 1000, weight: 3, color: 'brown', description: 'Decorative rock that you can plug in so it does not run away!', stock: 38, category_id: 3},
  {name: 'rockcase', photo: 'https://s-media-cache-ak0.pinimg.com/236x/0d/e5/33/0de533c4bd2cade31284b7305096c12b.jpg', price: 3400, weight: 10, color: 'grey', description: 'Keep your phone in this 10 pound case so that thieves are deterred from stealing your valuable smart phone!', stock: 28, category_id: 2},
  {name: 'kirbyrock', photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxMlP-3pU2ofXx9ctdH3dsBz2mxOl6LS_8oY6knLGRIBQDz6VJ', price: 39400, weight: 18, color: 'pink', description: 'Adorable pet in pepto-bismol pink.', stock: 18, category_id: 1},
  {name: 'excalibur rock', photo: 'http://www.explorelochlomond.co.uk/stone.jpg', price: 53329400, weight: 2400, color: 'grey', description: 'Useful for fending off intruders. Keep away from children.', stock: 1, category_id: 2},
  {name: 'Kid Rock', photo: 'https://www.razorgator.com/images/2/concerts-hero/rock-pop/kid-rock.jpg', price: 1539420, weight: 160, color: 'human', description: 'Partyyyfyfydsfdsuyydsfyyyyyyyyy!', stock: 2, category_id: 4},
  {name: 'Chris Rock', photo: 'http://www.officialpsds.com/images/thumbs/Chris-Rock-psd48491.png', price: 4039420, weight: 140, color: 'human', description: 'I had a cop pull me over the other day, scared me so bad, made me think I stole my own car', stock: 2, category_id: 4}

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
  {status: 'processing', date: '2017-01-10 14:35:38.811-05', user_id: 1, address_id: 1},
  {status: 'completed', date: '2017-01-10 14:35:38.811-05', user_id: 2, address_id: 2},
  {status: 'cancelled', date: '2017-01-10 14:35:38.811-05', user_id: 2, address_id: 2},
  {
    status: 'cancelled', date: '2017-01-10 14:35:38.811-05', user_id: 1, address_id: 1
  }
], order => db.model('orders').create(order));

const seedCartProducts = () => db.Promise.each([
  {quantity: 5, order_id: 1, rock_id: 1},
  {quantity: 99, order_id: 2, rock_id: 2},
  {quantity: 9, order_id: 1, rock_id: 2},
  {quantity: 9, order_id: 3, rock_id: 1},

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
