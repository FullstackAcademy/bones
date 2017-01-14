const db = require('APP/db')

const randQty = () => Math.round(Math.random() * 100)

const generateInventory = () => {
  const inventory = []
  let i = 1
  while (i <= 35) {
    inventory.push({size: 'XS', quantity: randQty(), product_id: i})
    inventory.push({size: 'S', quantity: randQty(), product_id: i})
    inventory.push({size: 'M', quantity: randQty(), product_id: i})
    inventory.push({size: 'L', quantity: randQty(), product_id: i})
    inventory.push({size: 'XL', quantity: randQty(), product_id: i})
    inventory.push({size: 'XXL', quantity: randQty(), product_id: i})
    i++
  }
  return inventory
}

const seedUsers = () => db.Promise.map([
  {name: 'Katie Jackson', email: 'katie@animalapparel.com', password: '5678'},
  {name: 'Lisa Pan', email: 'lisa@animalapparel.com', password: '5678'},
  {name: 'Gladys Um', email: 'gladys@animalapparel.com', password: '5678'},
  {name: 'Chloe Rice', email: 'chloe@animalapparel.com', password: '5678'},
  {name: 'Sophia Bok', email: 'sophia@animalapparel.com', password: '5678'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {
    name: 'Unisex Zip-up Hoodie',
    description: 'This fiery red hoodie is a classic for you and the pup in your life.',
    price: '29.95',
    imageURL: '/img/products/aa-hoodie-unisex.png',
    tags: ['red', 'hoodie', 'unisex', 'men']
  },
  {
    name: 'Dog Zip-up Hoodie',
    description: 'Your pups can look as fresh and clean as theirs parents in this fiery red hoodie.',
    price: '15.95',
    imageURL: '/img/products/aa-hoodie-dog.png',
    tags: ['red', 'hoodie', 'pets', 'dogs']
  },
  {
    name: 'Unisex Classic Baseball Tee',
    description: 'Ready to hit the sandlot? Show up in style in this class knit baseball tee.',
    price: '23.95',
    imageURL: '/img/products/aa-raglan-unisex.png',
    tags: ['shirt', 'white', 'black', 'unisex', 'men']
  },
  {
    name: 'Puppy Baseball Tee',
    description: 'Ready to hit the sandlot? Show up in style in this class knit baseball tee.',
    price: '15.95',
    imageURL: '/img/products/aa-raglan-dog.png',
    tags: ['shirt', 'white', 'pets', 'black', 'dogs']
  },
  {
    name: 'Unisex Black Puffer Vest',
    description: 'Sleek, sophisticated, and effortlessly cool, only the most fashionable people own this vest.',
    price: '39.95',
    imageURL: '/img/products/black-puffer-vest-unisex.png',
    tags: ['black', 'unisex', 'men', 'vest']
  },
  {
    name: 'Dog Black Puffer Vest',
    description: 'Your pup can be fashionable too. Just like you.',
    price: '17.95',
    imageURL: '/img/products/black-puffer-vest-dog.png',
    tags: ['black', 'pets', 'dogs', 'vest']
  },
  {
    name: 'Unisex Bruins Jacket',
    description: 'Now you can rep the Boys from Beantown in this zip-up Bruins jacket--get one for everyone in your crew, and one for your doggy too!',
    price: '88.95',
    imageURL: '/img/products/bruins-jacket-unisex.png',
    tags: ['black', 'yellow', 'unisex', 'men', 'jacket']
  },
  {
    name: 'Women\'s Bruins Jacket',
    description: 'Now you can rep the Boys from Beantown in this zip-up Bruins jacket--get one for everyone in your crew, and one for your doggy too!',
    price: '88.95',
    imageURL: '/img/products/bruins-jacket-womens.png',
    tags: ['black', 'yellow', 'jacket', 'women']
  },
  {
    name: 'Dog Bruins Jacket',
    description: 'Now you can rep the Boys from Beantown in this zip-up Bruins jacket--get one for everyone in your crew, and one for your doggy too!',
    price: '39.95',
    imageURL: '/img/products/bruins-jacket-dog.png',
    tags: ['black', 'yellow', 'jacket', 'pets', 'dogs']
  },
  {
    name: 'Unisex Burberry Button-up',
    description: 'Burberry plaid is always in season, always in style. Pick one up for your bae and fur-bae today!',
    price: '79.95',
    imageURL: '/img/products/burberry-blouse-unisex.png',
    tags: ['tan', 'unisex', 'men', 'shirt']
  },
  {
    name: 'Women\'s Burberry Button-up',
    description: 'Burberry plaid is always in season, always in style. Pick one up for your bae and fur-bae today!',
    price: '79.95',
    imageURL: '/img/products/burberry-blouse-womens.png',
    tags: ['tan', 'shirt', 'brown', 'tan', 'women']
  },
  {
    name: 'Dog Burberry Button-up',
    description: 'Burberry plaid is always in season, always in style. Pick one up for your bae and fur-bae today!',
    price: '59.95',
    imageURL: '/img/products/burberry-blouse-dog.png',
    tags: ['tan', 'blouse', 'pets', 'brown', 'tan', 'dogs']
  },
  {
    name: 'Unisex Denim Vest',
    description: 'This denim cut-off vest is a summer must-have for the whole fam.',
    price: '18.99',
    imageURL: '/img/products/denim-vest-unisex.png',
    tags: ['blue', 'unisex', 'men', 'vest', 'sale']
  },
  {
    name: 'Women\'s Denim Vest',
    description: 'This denim cut-off vest is a summer must-have for the whole fam.',
    price: '18.99',
    imageURL: '/img/products/denim-vest-womens.png',
    tags: ['blue', 'vest', 'women', 'sale']
    },
  {
    name: 'Dog Denim Vest',
    description: 'This denim cut-off vest is a summer must-have for the whole fam.',
    price: '12.99',
    imageURL: '/img/products/denim-vest-dog.png',
    tags: ['blue', 'vest', 'pets', 'dogs', 'sale']
  },
  {
    name: 'Unisex Emerald Puffer Jacket',
    description: 'Stay warm this winter in this brillian emerald green, faux-down puffer coat.',
    price: '109.95',
    imageURL: '/img/products/green-puffer-coat-unisex.png',
    tags: ['green', 'unisex', 'men', 'jacket']
  },
  {
    name: 'Dog Emerald Puffer Jacket',
    description: 'Stay warm this winter in this brillian emerald green, faux-down puffer coat.',
    price: '77.95',
    imageURL: '/img/products/green-puffer-coat-dog.png',
    tags: ['green', 'pets', 'dogs', 'jacket']
  },
  {
    name: 'Doggy\'s Fierce in Leopard Too!',
    description: 'Let your pup show off their wild side in this leopard print ensemble!',
    price: '14.95',
    imageURL: '/img/products/leopard-jacket-dog.png',
    tags: ['brown', 'tan', 'pets', 'dogs', 'vest']
  },
  {
    name: 'Fierce in Leopard',
    description: 'Show off your wild side in this leopard print knit dress.',
    price: '29.95',
    imageURL: '/img/products/leopard-jacket-womens.png',
    tags: ['brown', 'tan', 'women', 'vest']
  },
  {
    name: 'Fierce in Leopard',
    description: 'Show off your wild side in this leopard print knit dress.',
    price: '29.95',
    imageURL: '/img/products/leopard-jacket-unisex.png',
    tags: ['brown', 'tan', 'unisex', 'men', 'vest']
  },
  {
    name: 'Dog Pikachu Costume',
    description: 'Gotta catch em all!',
    price: '12.99',
    imageURL: '/img/products/pikachu-costume-dog.png',
    tags: ['yellow', 'pets', 'dogs', 'costumes', 'sale']
  },
  {
    name: 'Cat Pikachu Costume',
    description: 'Gotta catch em all!',
    price: '12.99',
    imageURL: '/img/products/pikachu-costume-cat.png',
    tags: ['yellow', 'pets', 'cats', 'costumes', 'sale']
  },
  {
    name: 'Unisex Pikachu Costume',
    description: 'Gotta catch em all!',
    price: '24.99',
    imageURL: '/img/products/pikachu-costume-unisex.png',
    tags: ['yellow', 'unisex', 'men', 'costumes', 'sale']
  },
  {
    name: 'Kid\'s Pikachu Costume',
    description: 'Gotta catch em all!',
    price: '16.99',
    imageURL: '/img/products/pikachu-costume-kids.png',
    tags: ['yellow', 'kids', 'costumes', 'sale']
  },
  {
    name: 'Unisex Checkered Button-up',
    description: 'Channel your inner lumberjack with this checkered, cotton button-up shirt--a hipster wardrobe necessity.',
    price: '18.95',
    imageURL: '/img/products/red-check-shirt-unisex.png',
    tags: ['red', 'black', 'unisex', 'men', 'shirt']
  },
  {
    name: 'Women\'s Checkered Shirtdress',
    description: 'Channel your inner lumberjack with this checkered, cotton button-up shirt--a hipster wardrobe necessity.',
    price: '18.95',
    imageURL: '/img/products/red-check-shirtdress-womens.png',
    tags: ['red', 'black', 'women', 'shirt']
  },
  {
    name: 'Doggy Checkered Button-up',
    description: 'Your pup can channel its little inner lumberjack along with you in this checkered, cotton button-up shirt.',
    price: '12.95',
    imageURL: '/img/products/red-check-jacket-dog.png',
    tags: ['red', 'black', 'pets', 'dogs', 'shirt']
  },
  {
    name: 'Unisex Shearling Jacket',
    description: 'Suede shearling coats are all the rage. Synthetic of course! Get one for your partner in crime and your four-legged sidekick too!',
    price: '48.95',
    imageURL: '/img/products/shearling-coat-unisex.png',
    tags: ['unisex', 'men', 'jacket', 'brown', 'tan']
},
  {
    name: 'Women\'s Shearling Jacket',
    description: 'Suede shearling coats are all the rage. Synthetic of course! Get one for your partner in crime and your four-legged sidekick too!',
    price: '48.95',
    imageURL: '/img/products/shearling-coat-womens.png',
    tags: ['jacket', 'brown', 'tan', 'women']
  },
  {
    name: 'Dog Shearling Jacket',
    description: 'Suede shearling coats are all the rage. Synthetic of course! Get one for your partner in crime and your four-legged sidekick too!',
    price: '19.95',
    imageURL: '/img/products/shearling-coat-dog.png',
    tags: ['jacket', 'pets', 'brown', 'tan', 'dogs']
  },
  {
    name: 'Unisex Toggle Coat',
    description: 'Cozy, classy, and chic. This red faux wool coat with toggle closure is just what you need to brighten up the winter, and with styles for whole family!',
    price: '88.95',
    imageURL: '/img/products/toggle-coat-unisex.png',
    tags: ['unisex', 'men', 'jacket', 'red', 'tan']
  },
  {
    name: 'Women\'s Toggle Coat',
    description: 'Cozy, classy, and chic. This red faux wool coat with toggle closure is just what you need to brighten up the winter, and with styles for whole family!',
    price: '88.95',
    imageURL: '/img/products/toggle-coat-womens.png',
    tags: ['jacket', 'red', 'tan', 'women']
  },
  {
    name: 'Cat Toggle Coat',
    description: 'Cozy, classy, and chic. This red faux wool coat with toggle closure is just what you need to brighten up the winter, and with styles for whole family!',
    price: '39.95',
    imageURL: '/img/products/toggle-coat-cat.png',
    tags: ['jacket', 'pets', 'red', 'tan', 'cats']
  }

], product => db.model('products').create(product))

const seedInventory = () => db.Promise.map(generateInventory(), inventory => db.model('inventory').create(inventory))

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedInventory)
  .then(inventory => console.log(`Seeded ${inventory.length} inventory OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
