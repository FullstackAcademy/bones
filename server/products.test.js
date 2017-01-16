const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {
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
        category: "tools",
        description: "From the one and only A Moderately Sized Tree. Tree was not harmed in the making of this stick.",
        unitPrice: 5000.00,
        inventoryQuantity: 1,
      },
      {
        title: "Coarse Sand",
        brand: "The Quarry",
        category: "accessories",
        description: "Coarse sand - perfect for removal of anything from anything. And removal of that thing",
        unitPrice: 2.00,
        inventoryQuantity: 500,
      },
      {
        userName: "IMBATMAN",
        firstName:
        "Batman",
        lastName: "Batman",
        email: "batman@batman.com",
        password: "1234"
      }
    ]
    return Product.bulkCreate(products, {returning: true})
      .then(createdProduct => {
       product1  = createdProduct[0];
       product2  = createdProduct[1];
       product3  = createdProduct[2];

    })
  })


	it('POSTs one product', () => {
    return request(app)
      .post(`/api/products`)
      .send({
        title: 'Davids Cobalt Blast',
        brand: 'Bubba Gump David',
        category: 'paint',
        description: 'A blast from the past of extroardinary color',
        unitPrice: 33.77,
        inventoryQuantity: 37
      })
      .expect(201)
      .then(res => {
        expect(res.body).to.contain({title: "Davids Cobalt Blast"})
      })
  });

	it('GETs all products', () => {
    return request(app)
      .get('/api/products')
      .then((res)=> {
        expect(res.body).to.have.length(4)
        expect(res.body[3]).to.contain({title: "Davids Cobalt Blast"})
      })

	});

	it('GETs one product', () => {
    return request(app)
      .get('/api/products/1')
      .then(res => {
        expect(res.body).to.contain({title: "Ben's Best Blue"})
      })
	});

	it('PUTs one product', () => {
    return request(app)
    .put('/api/products/3')
    .send({brand: 'Rocky Balrocka'})
    .then(res => {
      expect(res.body).to.contain({brand: "Rocky Balrocka"})
      expect(res.body).to.not.contain({brand: "The Quarry"})
    })
	});

	it('DELETEs one products', () => {
    return request(app)
    .delete('/api/products/3')
    .send()
    .then(res => expect(res.status).to.equal(204))
	});
	// it('GETS all reviews for a product', () => {

	// });
	// it('GETS one review for a product', () => {

	// })

})
