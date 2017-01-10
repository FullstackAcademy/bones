const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
  {title: 'Hats', category: ['Clothes'], current_price: 1, description: 'test', availability: true, inventory: 1},
  {title: 'Socks', category: ['Clothes'], current_price: 1, description: 'test', availability: true, inventory: 1}
], product => db.model('products').create(product));


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(seedProducts)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())



