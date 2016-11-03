const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Celeb = require('APP/db/models/celeb')
const Product = require('APP/db/models/product')
const {CelebProduct} = require('APP/db/models')
const app = require('./start')
const Promise = require('bluebird');

 describe('/api/celebs', () => {
  const celebs = [
    {
      name: "Emma Stone",
      list: "A",
      alive: true
    },
    {
      name: 'Elizabeth Taylor',
      list: "A",
      alive: false
    },
    {
      name: 'Mickey Rourke',
      list: "D",
      alive: true
    }
   ]
   const [emma,liz,mickey] = celebs;

   const products = [
   {
      name: "Mary Jane outfit",
      price: 10.00,
      categories: ["Comics", "Clothing" ]
    },
    {
      name: "Giant Diamond Ring",
      price: 30000.00,
      categories: ["Jewelry"]
    },
    {
      name: "Leather vest",
      price: 300.00,
      categories: ["Clothing"]
    }
   ]

   before('sync database & make products', () =>
     db.didSync
       .then(() => Celeb.truncate({ cascade: true }))
       .then(() => Product.truncate({ cascade: true }))
       .then(() => Promise.props({
          celebs: Promise.map(celebs, (celeb) => Celeb.create(celeb)),
          products: Promise.map(products, (prod) => Product.create(prod))
        })
       )
       .then(({celebs, products}) =>
             Promise.map(products,
                         product =>
                         CelebProduct.create({
                          product_id: product.id,
                          celeb_id: celebs[0].id
                         }))
       )
       .then(() => console.log('done with associations'))
   )

   it('GET / lists all celebrities', () =>
     request(app)
       .get(`/api/celebs`)
       .expect(200)
       .then(res => {
          expect(res.body).to.have.length(celebs.length)
        })
   )

   it('POST / adds a new celebrity', () =>
       request(app)
         .post('/api/celebs')
         .send({
           name: "Thandie Newton",
           list: "A",
           alive: true
         })
         .expect(201)
         .then(res => {
            expect(res.body).contain(
            {
             name: "Thandie Newton",
             list: "A",
             alive: true
            })
         })
   )

   it('GET /:celebId lists all products by celebrity id', () =>
     request(app)
       .get(`/api/celebs/2`)
       .expect(200)
       .then(res => {
         console.log(res.body)
         expect(res.body[0].products[0]).to.be.an('object')
         expect(res.body[0].products[0].name).to.equal("Mary Jane outfit")
         expect(res.body[0].products[1].name).to.equal("Giant Diamond Ring")
       })
   )

  it('PUT /:celebId updates an existing celebrity', () =>
       request(app)
         .put('/api/celebs/3')
         .send({
           name: "Emma Stone-Gosling",
           list: "B",
           alive: true
         })
         .expect(200)
         .then( () =>
            Celeb.findById(3)
            .then(celeb => {
              expect(celeb).to.be.an('object')
              expect(celeb.name).to.equal('Emma Stone-Gosling')
              expect(celeb.list).to.equal('B')
              expect(celeb.alive).to.equal(true)
            }))
 )

  it('DELETE /:celebId deletes a celebrity', () =>
    request(app)
       .delete('/api/celebs/2')
       .expect(200)
       .then(res =>
          expect(res.body.message).to.eql("Celebrity has been deleted")
       )
       .then(() =>
             Celeb.findById(2)
             .then((celeb) => expect(celeb).to.be.null)
       )
 )

 })
