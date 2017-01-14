const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {userName: 'so many', email: 'god@example.com', password: '1234'},
  {userName: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
	{title: 'blue paint', brand: 'bm', category: 'paint', description: 'its blue', size: '10oz', unitPrice: '50.00'},
	{title: 'red paint', brand: 'bm', category: 'paint', description: 'its red', size: '5oz', unitPrice: '10.00'},
  {title: 'A prep item', brand: 'bm', category: 'prep', description: 'its red', size: '5oz', unitPrice: '10.00'},
  {title: 'A painting tool', brand: 'bm', category: 'painting tools', description: 'its red', size: '5oz', unitPrice: '130.00'},
  {title: 'A cleanup tool', brand: 'bm', category: 'cleanup', description: 'its red', size: '5oz', unitPrice: '120.00'},
  {title: 'A safety tool', brand: 'bm', category: 'safety', description: 'its red', size: '5oz', unitPrice: '110.00'}
], paint => db.model('products').create(paint))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(seedProducts)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
