const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/order');
const Product = require('APP/db/models/product');
const OrderProduct = require('APP/db/models/orderProduct')
const router = require('express').Router();
const app = require('./start')
const Promise = require('bluebird');

describe('/api/orders', () => {
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

   const orders = [
    {
      user_id: 2,
      total: 357,
      status: 'delivered'
    },
    {
      user_id: 1,
      total: 385
    },
    {
      user_id: 2,
      total: 1947,
      status: 'shipped'
    }
   ]

   let usableProductIds = []
   let orderIds = []
   let idFromPost

   before('sync database & make products', () =>
     db.didSync
       .then(() => Order.truncate({ cascade: true }))
       .then(() => Product.truncate({ cascade: true }))
       .then(() => Promise.props({
          orders: Promise.map(orders, (order) => Order.create(order)),
          products: Promise.map(products, (prod) => Product.create(prod))
        })
       )
       .then(({orders, products}) => {
         products.map((product) => usableProductIds.push(product.id))
         orders.map((order) => orderIds.push(order.id))
       }
       )
   )
    describe('Get requests', () => {
      it('Get / lists all orders in database', () =>
        request(app)
        .get(`/api/orders`)
        .expect(200)
        .then(res => {
          expect(res.body).to.have.length(orders.length)
        })
      )

      it('Get /:orderId gets order with corresponding id', () =>
         request(app)
         .get(`/api/orders/${orderIds[0]}`)
         .expect(200)
         .then(res => {
          expect(res.body).to.be.an('object')
         })
      )

      it('Get /status/:status lists all the order of certain status', () =>
         request(app)
        .get(`/api/orders/status/shipped`)
        .expect(200)
        .then(res => {
          expect(res.body).to.have.length(1)
          expect(res.body[0].total).to.eql(1947)
        })
      )

      it('Get /users/:user_id lists all orders for a specific user', () =>
        request(app)
        .get(`/api/orders/users/2`)
        .expect(200)
        .then(res => {
          expect(res.body).to.have.length(2)
          expect(res.body[0].total + res.body[1].total).to.eql(2304)
        })
      )

      it('Get /users/:user_id/:status lists all orders of ceratin status for specific user', () =>
        request(app)
        .get(`/api/orders/users/2/delivered`)
        .expect(200)
        .then(res => {
          expect(res.body).to.have.length(1)
          expect(res.body[0].total).to.eql(357)
        })
      )
    })

    describe('Post requests', ()=> {
      it('Post / creates a new order WITH corresponding rows in OrderProduct table', () =>
        request(app)
        .post('/api/orders')
        .send({
          total: 4358,
          products: [
          {
            product_id: usableProductIds[0],
            quantity: 5,
            price: 34,
          },
          {
            product_id: usableProductIds[1],
            quantity: 10,
            price: 245,
          },
          {
            product_id: usableProductIds[2],
            quantity: 345,
            price: 6754,
          }
          ]}
        )
        .expect(201)
        .then(res => {
          idFromPost = res.body.id;
          expect(res.body.total).to.eql(4358);
          expect(res.body.status).to.eql('processing')
        })
      )


      it('checking join table resulting from POST separately', () =>
      OrderProduct.findAll({where: {order_id: idFromPost}})
      .then(rows => {
        expect(rows).to.have.length(3);
        expect(rows[0].dataValues).to.contain.all.keys('quantity', 'pricePerUnit','order_id','product_id')
        expect(rows[0].quantity).to.be.oneOf([5,10,345])
        }
      )
      )
    })

  describe('Put requests', () => {
    const theDate = new Date()
    before(() =>
      request(app)
     .put(`/api/orders/${idFromPost}`)
     .send({
        user_id: 2,
        status: 'shipped',
        shippingDate: theDate,
        total: 45990,
        products: [
          {
            product_id: usableProductIds[1],
            quantity: 50,
            price: 949
          }
        ]
      })
    )

    it('Put /:orderId can change user associated', () =>
      Order.findById(idFromPost)
      .then(order => {
        expect(order.user_id).to.eql(2)
      })
    )

    it('Put /:orderId can change the order status', () =>
      Order.findById(idFromPost)
      .then(order => {
        expect(order.status).to.eql('shipped')
      })
    )

    it('Put /:orderId can input the shipping date', () => {
      Order.findById(idFromPost)
      .then(order => {
        expect(order.shippingDate).to.eql(theDate)
      })
     }
    )

    it('Put /:orderId can change the total', () => {
      Order.findById(idFromPost)
      .then(order => {
        expect(order.total).to.eql(45990)
      })
     }
    )

    it('Put /:orderId can change rows in the order_product join table', () =>{
      OrderProduct.findOne({where: {
        order_id: idFromPost,
        product_id: usableProductIds[1]
      }})
      .then(orderProduct =>{
        expect(orderProduct).to.be.an('object')
        expect(orderProduct.quantity).to.eql(50)
        expect(orderProduct.pricePerUnit).to.eql(949)
      }
      )
    }
    )
    describe('but what if the row doesn\'t already exist?', () => {
      before(() =>
      request(app)
      .put(`/api/orders/${orderIds[0]}`)
      .send({
        products: [
          {
            product_id: usableProductIds[1],
            quantity: 50,
            price: 949
          }
        ]
      }))

      it('adds a row?',() =>
         OrderProduct.findOne({where: {
          order_id: orderIds[0],
          product_id: usableProductIds[1]
         }})
         .then((orderProduct) => {
           expect(orderProduct).to.be.an('object')
           expect(orderProduct.quantity).to.eql(50)
           expect(orderProduct.pricePerUnit).to.eql(949)
         }
         )
      )
    })
  })

  describe('Delete requests', () => {
    before(() =>
      request(app)
      .delete(`/api/orders/${orderIds[0]}`)
    )

    it('Delete /:orderId removes the order from the database', () =>
       Order.findById(orderIds[0])
       .then((result) => expect(result).to.be.null)
    )

    it('Delete /:orderId also removes the order from order order_product database', () =>
       OrderProduct.findAll({where: {order_id: orderIds[0]}})
       .then((result) => expect(result).to.eql([]))
    )

    it('Delete /:orderId/:productId removes the row from order_product database', () =>
       request(app)
       .delete(`/api/orders/${idFromPost}/${usableProductIds[1]}`)
       .expect(200)
       .then(res =>{
        expect(res.body.message).to.eql('product has been removed')
       })
    )
  })
})