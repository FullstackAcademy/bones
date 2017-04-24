'use strict'

console.log('seedinggg!!******************************************************************************************************************************')
const db = require('APP/db')
    , {User, Order, Thing, Favorite, Product, Category, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    things: things(),
    products: products(),
    categories: categories(),
  }

  seeded.favorites = favorites(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  nish: {
    firstName: 'Nishdawg',
    lastName: 'Mehta',
    email: 'nish@nish.com',
    name: 'nish',
    password: '1234',
  },
  charles: {
    firstName: 'Charliiieeee',
    lastName: 'Long',
    email: 'charles@cool.mil',
    password: '1234'
  },
  alex: {
    firstName: 'Alex',
    lastName: 'Cherubin',
    email: 'alex@alex.com',
    password: '1234'
  },
})

const products = seed(Product, {
  lebronJersey:
  {
    id: 1,
    title: 'Lebrrn',
    description: 'jersey for cavs bandwagon fans',
    price: 1,
    inventory: 100,
    imageURL: 'https://cavs-staging-cavaiersholdings.netdna-ssl.com/content/images/thumbs/0020957_23-lebron-james-2nd-alt-swingman-jersey_415.jpeg',
    category_id: 1,
  },
  westbrookJersey:
  {
    id: 2,
    title: 'Westbrook Jersey',
    description: 'tripledouble machineee',
    price: 90,
    inventory: 80,
    imageURL: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_978000/ff_978909_xl.jpg&w=340',
    category_id: 1,
  },
  jeremyLinBasketball:
  {
    id: 3,
    title: 'Jeremy Lin Signed basketball',
    description: 'Signed by the best 3 week flash in the pan wonder in basketball history',
    price: 1000000,
    inventory: 2,
    imageURL: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_978000/ff_978909_xl.jpg&w=340',
    category_id: 3,
  }
})

const categories = seed(Category, {
  jerseys: {
    id: 1,
    name: 'Jerseys',
    imageURL: 'http://nba.frgimages.com/FFImage/thumb.aspx?i=/productImages%2f_1993000%2fff_1993196_xl.jpg&w=600',
  },
  shoes: {
    id: 2,
    name: 'Shoes',
    imageURL: 'http://www.air-foamposite-galaxy.com/images/0829/Nike-Air-Max-LeBron-James-11-P.S-ELITE-Gold-Black-Basketball-shoes.jpg',
  },
  memorabilia: {
    id: 3,
    name: 'memorabilia',
    imageURL: 'http://cdn.sportsmemorabilia.com/sports-product-image/1354-t1748799-340.jpg',
  },
})


const things = seed(Thing, {
  surfing: {name: 'surfing'},
  smiting: {name: 'smiting'},
  puppies: {name: 'puppies'},
})


// const favorites = seed(Favorite,
//   // We're specifying a function here, rather than just a rows object.
//   // Using a function lets us receive the previously-seeded rows (the seed
//   // function does this wiring for us).
//   //
//   // This lets us reference previously-created rows in order to create the join
//   // rows. We can reference them by the names we used above (which is why we used
//   // Objects above, rather than just arrays).
//   ({users, things}) => ({
//     // The easiest way to seed associations seems to be to just create rows
//     // in the join table.
//     'obama loves surfing': {
//       user_id: users.barack.id,    // users.barack is an instance of the User model
//                                    // that we created in the user seed above.
//                                    // The seed function wires the promises so that it'll
//                                    // have been created already.
//       thing_id: things.surfing.id  // Same thing for things.
//     },
//     'god is into smiting': {
//       user_id: users.god.id,
//       thing_id: things.smiting.id
//     },
//     'obama loves puppies': {
//       user_id: users.barack.id,
//       thing_id: things.puppies.id
//     },
//     'god loves puppies': {
//       user_id: users.god.id,
//       thing_id: things.puppies.id
//     },
//   })
// )

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}


class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, things, products, categories})
