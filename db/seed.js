const db = require('APP/db')

const seedUsers = require('./seed/users');
const seedCategories = require('./seed/categories');
const seedProducts = require('./seed/products');


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close());
