var Promise = require('bluebird');

const users = [
  {
    firstName: 'Nishdawg',
    lastName: 'Mehta',
    email: 'nish@nish.com',
    name: 'nish',
    password_digest: '1234',
    created_at: '4-18-2017',
    updated_at: '4-18-2017',
  },
  {
    firstName: 'Charliiieeee',
    lastName: 'Long',
    email: 'charles@cool.mil',
    password_digest: '1234',
    created_at: '4-18-2017',
    updated_at: '4-18-2017',
  },
  {
    firstName: 'Alex',
    lastName: 'Cherubin',
    email: 'alex@alex.com',
    password_digest: '1234',
    created_at: '4-18-2017',
    updated_at: '4-18-2017',
  },
]

const products = [
  {
    id: 1,
    title: 'Lebrrn',
    description: 'jersey for cavs bandwagon fans',
    price: 1,
    inventory: 100,
    imageUrl: 'https://cavs-staging-cavaiersholdings.netdna-ssl.com/content/images/thumbs/0020957_23-lebron-james-2nd-alt-swingman-jersey_415.jpeg',
    category_id: 1,
  },
  {
    id: 2,
    title: 'Westbrook Jersey',
    description: 'tripledouble machineee',
    price: 90,
    inventory: 80,
    imageUrl: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_978000/ff_978909_xl.jpg&w=340',
    category_id: 1,
  },
  {
    id: 3,
    title: 'Jeremy Lin Signed basketball',
    description: 'Signed by the best 3 week flash in the pan wonder in basketball history',
    price: 1000000,
    inventory: 2,
    imageUrl: 'http://assets.nydailynews.com/polopoly_fs/1.1019747.1330898515!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/10682257.jpg',
    category_id: 3,
  }
]
const categories = [
  {
    id: 1,
    name: 'Jerseys',
    imageUrl: 'http://nba.frgimages.com/FFImage/thumb.aspx?i=/productImages%2f_1993000%2fff_1993196_xl.jpg&w=600',
  },
  {
    id: 2,
    name: 'Shoes',
    imageUrl: 'http://www.air-foamposite-galaxy.com/images/0829/Nike-Air-Max-LeBron-James-11-P.S-ELITE-Gold-Black-Basketball-shoes.jpg',
  },
  {
    id: 3,
    name: 'memorabilia',
    imageUrl: 'http://cdn.sportsmemorabilia.com/sports-product-image/1354-t1748799-340.jpg',
  },
]

module.exports={
  seed:   function (db) {

      // const creatingCats = Promise.map(categories, function(category){
      //   return db.Category.create(category)
      // })
      // creatingCats.then(()=>{
      //   const creatingUsers = Promise.map(users, function (user) {
      //     return db.User.create(user);
      //   })
      // })

      Promise.map(categories, function (category) {
        return db.Category.create(category);
      })
      .then(
        Promise.map(users, function (user) {
          return db.User.create(user);
        })
      )
      .then(
        Promise.map(products, function(product){
          return db.Product.create(product);
        })
      )

    }
}

//   const creatingRestaurants = Promise.map(data.restaurants, function (restaurant) {
//     return Restaurant.create(restaurant, { include: [Place] });
//   });
//   const creatingActivities = Promise.map(data.activities, function (activity) {
//     return Activity.create(activity, { include: [Place] });
//   });
//   return Promise.all([creatingHotels, creatingRestaurants, creatingActivities]);
// })
// .then(function () {
//   console.log('Finished inserting data');
// })
// .catch(function (err) {
//   console.error('There was totally a problem', err, err.stack);
// })
// .finally(function () {
//   db.close(); // creates but does not return a promise
//   return null; // stops bluebird from complaining about un-returned promise
// });
