const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {userName: 'so many', email: 'god@example.com', password: '1234'},
  {userName: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
	{title: 'blue paint', brand: 'bm', description: 'its blue', size: '10oz', unitPrice: '50.00'},
	{title: 'red paint', brand: 'bm', description: 'its red', size: '5oz', unitPrice: '10.00'}
], paint => db.model('products').create(paint))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(seedProducts)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
