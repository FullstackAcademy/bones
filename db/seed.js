const db = require('APP/db')

const seedUsers = () => db.Promise.map([

  {firstName: 'Michelle', lastName: 'Obama', email: 'michelle@firstlady.rocks', password: '1234', username: 'totalbadass'},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@president.rocks', password: '1234', username: 'realpowerfuldude'},

], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {name: `Hillary's Pantsuit`, price: 350.00, description: 'Classic red pantsuit, worn at the Democratic National Convention 2016', categories: ['Clothing']},
  {name: `Elijah Woods's Frodo Ring`, price: 13000, description: 'Made from real Elven magic', categories:['Film', 'Fantasy']},
  {name: `Emma Watson's Hermione Wig`, description:'The bushy but loveable mess from Harry Potter and the Chamber of Secrets', price: 175.00,categories: ['Costume', 'Hair']},
], product => db.model('products').create(product))

const seedCelebs = () => db.Promise.map([
  {name: 'Hillary Clinton', celebType: 'Future President',list: 'A', alive: true},
  {name: 'Elijah Wood', celebType: 'actor', list: 'A', alive: true},
  {name: 'Emma Watson', celebType: 'actor', list: 'A', alive: true},
], celeb => db.model('celebs').create(celeb))

const seedReviews = () => db.Promise.map([
  {stars: 2, text: 'My dog does not enjoy wearing these dog collars even though he loooooves Angelina Jolie'},
  {stars: 5, text: 'OMG Frodo wore this!! My ring finger has never been happier'},
  {stars: 4, text: 'This ring is pretty great, but Elijah Wood didn\'t really care when I showed him that I bought it and that offends me. 4 stars. I\'ll show you, Elijah!'},
], review => db.model('reviews').create(review))

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
  .catch(error => console.error(error))
  .finally(() => db.close())
