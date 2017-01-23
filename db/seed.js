const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user));

const seedCategories = () => db.Promise.map([
  {name: 'broomsticks'},
  {name: 'wands'},
], category => db.model('categories').create(category));

const seedProducts = () => db.Promise.map([
  {name: 'Nimbus 2000', description: 'blah', price: 34999, quantity: 100, photoURL: 'http://vignette4.wikia.nocookie.net/harrypotter/images/0/0f/Nimbus_2000_1.jpg/revision/latest?cb=20150530185551'},
  {name: 'Computer Programming for Beginners', description: 'Learn the Basics of Java', price: '1182', quantity: 10, photoURL: 'http://amazon.com'},
  {name: ' A Complete Guide For Beginners', description: 'Become An Expert In Python Programming ', price: '1438', quantity: 15, photoURL: 'http://amazon.com'},
  {name: "Ry's Git Tutorial", description: 'Git is a free version control system', price: '199', quantity: 25, photoURL: 'http://amazon.com'}
], product => db.model('products').create(product))

const setProductCategory = () => {
	return db.model('products').findOne({})
	.then(product => {
		return db.model('categories').find({
			where: {
				name: 'broomsticks'
			}
		}).then(category => {
			return product.addCategory(category);
		})
	})
}

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCategories)
  .then(seedProducts)
  .then(setProductCategory)
  .catch(error => console.error(error))    
  .finally(() => db.close());
