const db = require('APP/db')

const randQty = () => Math.round(Math.random() * 100)


const generateInventory = () => {
  const inventory = []
  let i = 1
  while (i <= 25) {
    inventory.push({size: 'S', quantity: randQty(), product_id: i})
    inventory.push({size: 'M', quantity: randQty(), product_id: i})
    inventory.push({size: 'L', quantity: randQty(), product_id: i})
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
    name: 'Pikachu Pet Costume',
    description: 'Gotta catch em all!',
    price: '12.95',
    imageURL: 'http://i.imgur.com/wYu7cQs.jpg',
    tags: ['pet', 'costumes', 'sale']
  },
  {
    name: 'Pikachu Adult Costume',
    description: 'Gotta catch em all!',
    price: '24.95',
    imageURL: 'http://images.halloweencostumes.com/products/38931/2-1-74326/adult-pikachu-jumpsuit-costume.jpg',
    tags: ['men', 'women', 'costumes', 'sale']
  },
  {
    name: 'Pikachu Kid Costume',
    description: 'Gotta catch em all!',
    price: '16.95',
    imageURL: 'https://s-media-cache-ak0.pinimg.com/originals/35/65/d8/3565d8f3d8ab43b1f314af44bbe24985.jpg',
    tags: ['kids', 'costumes', 'sale']
  },
  {
    name: 'Adult Polo',
    description: 'This fiery red polo will definitely help you and your pet stand out from the crowd. Always professional, always classy.',
    price: '29.99',
    imageURL: 'http://i.imgur.com/j20SH0W.jpg',
    tags: ['men', 'women', 'dogs']
  },
  {
    name: 'Puppy Polo',
    description: 'Your pup can look as fresh and clean as his/her parent in this fiery red polo.',
    price: '15.95',
    imageURL: 'http://i.imgur.com/BB91YBi.jpg',
    tags: ['dogs']
  },
  {
    name: 'Adult Fashion Flannel',
        description: 'Keep warm and cozy on those chilly nights with this hip flannel.',
        price: '18.99',
        imageURL: 'http://i.imgur.com/WJRoQ5X.jpg',
        tags: ['men', 'women', 'dogs']
  },
  {
    name: 'Doggy Fashion Flannel',
        description: 'Your pup want to be hip and warm too! Buy him/her this flannel.',
        price: '12.95',
        imageURL: 'http://i.imgur.com/3hoAd8H.jpg',
        tags: ['dogs']
  },
  {
    name: 'Red Fireside Flannel',
        description: 'This flannel is perfect for lounging around the fire.',
        price: '22.95',
        imageURL: 'http://i.imgur.com/yXjddbq.jpg',
        tags: ['men']
  },
  {
    name: 'Fido Fireside Flannel',
        description: 'Fido likes to hang by the fire too. Keep him cozy and fashionable in the Fireside Flannel.',
        price: '12.95',
        imageURL: 'http://i.imgur.com/AGoMO1H.jpg',
        tags: ['dogs']
  },
  {
    name: 'Lovely in Leopard Too!',
        description: 'Let your pup show off their wild side in this leopard print ensemble!',
        price: '14.95',
        imageURL: 'http://i.imgur.com/KgySk3l.jpg',
        tags: ['dogs']
  },
  {
    name: 'Lovely in Leopard',
        description: 'Show off your wild side in this leopard print knit dress.',
        price: '29.95',
        imageURL: 'http://i.imgur.com/afEM37x.jpg',
        tags: ['women']
  },
  {
    name: 'Pretty in Plaid',
        description: 'This classic plaid print dress screams sophistication. Try with with a belt for an extra layer of awesome.',
        price: '39.99',
        imageURL: 'http://i.imgur.com/ukEwZZa.jpg',
        tags: ['women']
  },
  {
    name: 'Pretty in Plaid',
        description: 'Give your sweet girl a little sophistication with this plaid dress with a black bow detail.',
        price: '18.95',
        imageURL: 'http://i.imgur.com/Wdm0nDn.jpg',
        tags: ['dogs']
  },
  {
    name: 'Classically Chambray',
        description: 'This chambray shirt dress is classic and cool.',
        price: '24.95',
        imageURL: 'http://i.imgur.com/x4lEOtv.jpg',
        tags: ['women']
  },
  {
    name: 'Chambray Cutie',
        description: 'This chambray dress is a classic option for a classy lady.',
        price: '14.95',
        imageURL: 'http://i.imgur.com/ybR7qPD.jpg',
        tags: ['dogs']
  },
  {
    name: 'Fur-Lined Jacket',
        description: 'Button up (or not) in fur-lined leather. Synthetic of course!',
        price: '48.95',
        imageURL: 'http://i.imgur.com/cwCnzWE.jpg',
        tags: ['men']
  },
  {
    name: 'Fur-Lined Jacket',
        description: 'Your pup will look effortlessly cool in this jacket made with synthetic fabrics.',
        price: '19.95',
        imageURL: 'http://i.imgur.com/z5uDYw4.jpg',
        tags: ['dogs']
  },
  {
    name: 'Fur-Lined Parka',
        description: 'Keep warm in this beautiful grey parka! Made with synthetic fabrics.',
        price: '89.95',
        imageURL: 'http://i.imgur.com/7ugdKsx.jpg',
        tags: ['women']
  },
  {
    name: 'Fur-Lined Barka',
        description: 'You dog will thank you for dressing them in this warm parka during their evening walks!',
        price: '39.95',
        imageURL: 'http://i.imgur.com/TbaE0Lf.jpg',
        tags: ['dogs']
  },
  {
    name: 'Black Puffer Vest',
        description: 'Sleek, sophisticated, and effortlessly cool, only the most fashionable people own this vest.',
        price: '39.95',
        imageURL: 'http://i.imgur.com/1FnuNPx.jpg',
        tags: ['women']
  },
  {
    name: 'Black Puffer Vest',
        description: 'Your pup can be fashionable too. Just like you. ',
        price: '17.95',
        imageURL: 'http://i.imgur.com/rwNzrle.png',
        tags: ['dogs']
  },
  {
    name: 'Red Zip-Up Hoodie',
        description: 'Puppy Hispter Zip-Up Hoodie in the classic red.',
        price: '8.95',
        imageURL: 'http://i.imgur.com/y2f9caX.jpg',
        tags: ['dogs', 'sale']
  },
  {
    name: 'Red Zip-Up Hoodie',
        description: 'Hipster Zip-Up Hoodie in the classic red.',
        price: '17.95',
        imageURL: 'http://i.imgur.com/dSKTGLJ.jpg',
        tags: ['men', 'women', 'sale']
  },
  {
    name: 'Puppy Baseball Tee',
        description: 'Ready to hit the sandlot? Show up in style in this class knit baseball tee.',
        price: '5.95',
        imageURL: 'http://i.imgur.com/HTMYrNl.jpg',
        tags: ['dogs', 'sale']
  },
  {
    name: 'Classic Baseball Tee',
        description: 'Ready to hit the sandlot? Show up in style in this class knit baseball tee.',
        price: '14.95',
        imageURL: 'http://i.imgur.com/5lHH6ub.jpg',
        tags: ['men', 'women', 'sale']
  }
], product => db.model('products').create(product))

const seedInventory = () => db.Promise.map(generateInventory(), inventory => db.model('inventory').create(inventory))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedInventory)
  .then(inventory => console.log(`Seeded ${inventory.length} inventory OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
