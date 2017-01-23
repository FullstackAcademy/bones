const db = require('APP/db');

const products = 
[
  {
  	name: 'Nimbus 2000', 
	  description: 'blah', 
	  price: 349.99, 
	  quantity: 100, 
	  photoURL: 'http://vignette4.wikia.nocookie.net/harrypotter/images/0/0f/Nimbus_2000_1.jpg/revision/latest?cb=20150530185551',
	  category: 'Broomsticks'
	},
  {
  	name: 'Pencil', 
	  description: 'It\'s a pencil', 
	  price: 0.99, 
	  quantity: 999, 
	  photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Number-2-pencil.jpg/2560px-Number-2-pencil.jpg',
	  category: 'Muggle Stuff'
	},
  {
  	name: 'Computer Programming for Beginners', 
  	description: 'Learn the Basics of Java',
  	price: '1182',
  	quantity: 10,
  	photoURL: 'http://amazon.com',
  	category: 'Muggle Stuff'
  },
  {
  	name: ' A Complete Guide For Beginners', 
  	description: 'Become An Expert In Python Programming ', 
  	price: '1438', 
  	quantity: 15, 
  	photoURL: 'http://amazon.com',
  	category: 'Muggle Stuff'
  },
  {
  	name: "Ry's Git Tutorial", 
  	description: 'Git is a free version control system', 
  	price: '199', 
  	quantity: 25, 
  	photoURL: 'http://amazon.com',
  	category: 'Muggle Stuff'
  }
]

const setProductCategory = (product_id, category_id) => {
	return db.model('product_categories').create({
		product_id,
		category_id
	});
}

const seedProducts = () => 
db.Promise.map(products, (product, index) => {
	return db.model('products')
	.create(product)
	.then(product => {
		return db.model('categories').find({
			where: {
				name: products[index].category
			}
		})
		.then(category => {
			return setProductCategory(product.id, category.id);
		})
	});
});

module.exports = seedProducts;