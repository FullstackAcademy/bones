const db = require('APP/db')
const seedUsers = () => db.Promise.map([
  {
    userName: "ZurkBeast",
    firstName: "Zurk",
    lastName: "Beast",
    email: "Zurk@Beast.com",
    password: "1234"
  }, {
    userName: "Deadpool",
    firstName: "Ryan",
    lastName: "Reynolds",
    email: "itscrazyIhavekids@gmail.com",
    password: "1234"
  }, {
    userName: "theJanitor",
    firstName: "The",
    lastName: "Janitor",
    email: "janitor@scrubs.com",
    password: "1234"
  }, {
    userName: "Superman",
    firstName: "Clark",
    lastName: "Kent",
    email: "clarkkentisNOTsuperman@gmail.com",
    password: "1234"
  }, {
      userName: "IMBATMAN",
      firstName:
      "Batman",
      lastName: "Batman",
      email: "batman@batman.com",
      password: "1234"
    }
], user => db.model('users').create(user))
const seedProducts = () => db.Promise.map([
	{
		title: 'blue paint',
		brand: 'bm',
		category: 'paint',
		description: 'its blue',
		size: '10oz',
		unitPrice: '50.00'
	}, {
		title: 'red paint',
		brand: 'bm',
		category: 'paint',
		description: 'its red',
		size: '5oz',
		unitPrice: '10.00'
	}, {
		title: 'A accessory item',
		brand: 'bm',
		category: 'accessories',
		description: 'its red',
		size: '5oz',
		unitPrice: '10.00'
	}, {
		title: 'A painting tool',
		brand: 'bm',
		category: 'tools',
		description: 'its red',
		size: '5oz',
		unitPrice: '130.00'
	}, {
		title: 'Another tool',
		brand: 'bm',
		category: 'tools',
		description: 'its red',
		size: '5oz',
		unitPrice: '120.00'
	}, {
		title: 'Another accessory',
		brand: 'bm',
		category: 'accessories',
		description: 'its red',
		size: '5oz',
		unitPrice: '110.00'
	}
], paint => db.model('products').create(paint))
db.didSync.then(() => db.sync({force: true})).then(seedUsers).then(seedProducts).then(users => console.log(`Seeded ${users.length} users OK`)).catch(error => console.error(error)). finally(() => db.close())
