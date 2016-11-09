const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {firstName: 'Michelle', lastName: 'Obama', email: 'michelle@firstlady.rocks', password: '1234', username: 'totalbadass'},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@president.rocks', password: '1234', username: 'realpowerfuldude'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {name: `Hillary's Pantsuit`, price: 350.00, description: 'Classic red pantsuit, worn at the Democratic National Convention 2016', categories: ['Clothing'], quantity: 5, photoURL: 'http://s1.r29static.com//bin/entry/567/x,80/1660164/image.jpg'},
  {name: `Elijah Woods's Frodo Ring`, price: 13000, description: 'Made from real Elven magic', categories:['Film', 'Fantasy'], quantity: 8, photoURL:'https://flavorwire.files.wordpress.com/2012/08/doom.jpg'},
  {name: `Emma Watson's Hermione Wig`, description:'The bushy but loveable mess from Harry Potter and the Chamber of Secrets', price: 175.00,categories: ['Costume', 'Hair'], quantity: 10, photoURL: 'http://worldtimes24.com/wp-content/uploads/2015/11/pic713-620x330.jpg'},
], product => db.model('products').create(product))

const seedCelebs = () => db.Promise.map([
  {name: 'Hillary Clinton', celebType: 'Future President',list: 'A', alive: true, photoURL: 'http://content-img.newsinc.com/jpg/2975/31007135/39164252.jpg?t=1465906020'},
  {name: 'Elijah Wood', celebType: 'actor', list: 'A', alive: true, photoURL: 'https://s-media-cache-ak0.pinimg.com/originals/72/6e/34/726e34f3b045660736abff784a1775a3.jpg'},
  {name: 'Emma Watson', celebType: 'actor', list: 'A', alive: true, photoURL: 'http://media.vogue.com/r/c_1,h_4000,w_3280/2015/02/20/05-emma-watson-prince-harry.jpg'},
], celeb => db.model('celebs').create(celeb))

const seedReviews = () => db.Promise.map([
  {stars: 2, text: 'My dog does not enjoy wearing these dog collars even though he loooooves Angelina Jolie', user_id: 1, product_id: 1},
  {stars: 5, text: 'OMG Frodo wore this!! My ring finger has never been happier', user_id: 2, product_id: 2},
  {stars: 4, text: 'This ring is pretty great, but Elijah Wood didn\'t really care when I showed him that I bought it and that offends me. 4 stars. I\'ll show you, Elijah!', user_id: 1, product_id: 3},
], review => db.model('reviews').create(review))

const seedOrders = () => db.Promise.map([
  {shippingDate: '3/22/16', status: 'shipped', total: 32.45, user_id: 1},
  {shippingDate: '4/22/16', status: 'cancelled', total: 42.45, user_id: 1},
  {shippingDate: '5/22/16', status: 'processing', total: 52.45, user_id: 2},
  {shippingDate: '6/22/16', status: 'delivered', total: 62.45, user_id: 2},
  {shippingDate: '7/22/16', status: 'processing', total: 72.45, user_id: 2},
], order => db.model('orders').create(order))

const seedOrderProducts = () => db.Promise.map([
  {quantity: 1, pricePerUnit: 12.50, order_id: 1, product_id: 1},
  {quantity: 2, pricePerUnit: 6.50, order_id: 1, product_id: 2},
  {quantity: 2, pricePerUnit: 11.99, order_id: 2, product_id: 1},
  {quantity: 2, pricePerUnit: 2.49, order_id: 2, product_id: 3},
  {quantity: 3, pricePerUnit: 3.50, order_id: 3, product_id: 2},
  {quantity: 3, pricePerUnit: 3.50, order_id: 3, product_id: 3},
], orderProducts => db.model('order_product').create(orderProducts))

const seedCelebProducts = () => db.Promise.map([
  {celeb_id: 1, product_id: 1},
  {celeb_id: 2, product_id: 2},
  {celeb_id: 3, product_id: 3}
], celebProducts => db.model('CelebProduct').create(celebProducts))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedCelebs)
  .then(celebs => console.log(`Seeded ${celebs.length} celebs OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedOrderProducts)
  .then(orderProducts => console.log(`Seeded ${orderProducts.length} orderProducts OK`))
  .then(seedCelebProducts)
  .then(celebProducts => console.log(`Seeded ${celebProducts.length} celebProducts OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
