const db = require('APP/db');

const categories = 
[
  {name: 'Broomsticks'},
  {name: 'Wands'},
  {name: 'Muggle Stuff'},
  {name: 'Food'},
  {name: 'Potion Ingredients'}
]

const seedCategories = () => db.Promise.map(categories, category => db.model('categories').create(category));

module.exports = seedCategories;