const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe.only('/api/products', () => {
	before('wait for the db', () => db.didSync)
  //after('synchronize and clear database', () => db.sync({force: true}));

  let product1, product2, product3

  before('Seed Products', () => {
    const products = [
      {
        title: "Ben's Best Blue",
        brand: "Ben's",
        category: "paint",
        description: "Ben's Best",
        unitPrice: 21.21,
        inventoryQuantity: 21,
      },
      {
        title: "Bubba's Special Stick",
        brand: "A Moderately Sized Tree",
        category: "painting tools",
        description: "From the one and only A Moderately Sized Tree. Tree was not harmed in the making of this stick.",
        unitPrice: 5000.00,
        inventoryQuantity: 1,
      },
      {
        title: "Coarse Sand",
        brand: "The Quarry",
        category: "prep",
        description: "Coarse sand - perfect for removal of anything from anything. And removal of that thing",
        unitPrice: 2.00,
        inventoryQuantity: 500,
      }
    ]

    return Product.bulkCreate(products, {returning: true})
      .then(createdProduct => {
       product1  = createdProduct[0].id;
       product2  = createdProduct[1].id;
       product3  = createdProduct[2].id;

    })
  })


	it('POSTs one product', () => {
    return request(app)
      .post('/api/products')
      .send({
        title: 'Davids Cobalt Blast',
        brand: 'Bubba Gump David',
        category: 'paint',
        description: 'A blast from the past of extroardinary color',
        unitPrice: 33.77,
        inventoryQuantity: 37
      })
      .then(res => {
        console.log(res.body, res.status)
      })
  });

	xit('GETs all products', () => {
    request(app)

	});

	xit('GETs one product', () => {

	});

	xit('PUTs one product', () => {

	});

	xit('DELETEs one products', () => {

	});
	// it('GETS all reviews for a product', () => { 

	// });
	// it('GETS one review for a product', () => {
		
	// })

})
