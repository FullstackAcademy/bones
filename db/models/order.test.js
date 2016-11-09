'use strict'

const db = require('APP/db')
const Order = require('./order')
const {expect} = require('chai')
const Product = require('./product')
const User = require('./user')
const OrderProduct = require('./orderProduct')

const products = [
          {
            name: 'Grandfather\'s gold watch',
            quantity: 1,
            description: 'Brad\'s grandfather gave this watch to Brad on his deathbed. Soooooo sad :(' ,
            price: 3000000,
            categories: ['shiny', 'tragic'],
            photoURL: 'http://luxurylaunches.com/wp-content/uploads/2012/11/pharrells-gshock-gold-watch.jpg'
          },
          {
            name: 'Dog collar',
            quantity: 4,
            description: 'Angie wore these around her wrists and ankles at a naughty party one night' ,
            price: 1000,
            categories: ['pointy', 'tight'],
            photoURL: 'http://luxurylaunches.com/wp-content/uploads/2012/11/pharrells-gshock-gold-watch.jpg'
          },
          {
             name: `Hillary's Pantsuit`,
             price: 350.00,
             categories: ['Clothing']
           },
           {
             name: `Emma Watson's Hermione Wig`,
             price: 175.00,
             category: ['Costume', 'Hair']
           },
           {
             name: `Kate Winslet's Titanic Necklace`,
             price: 15000.00
           }
  ]

describe('Order', () => {
  before('wait for the db', () =>
    db.sync({force: true})
    .then(()=>
      User.create({
        email: 'scout@scout.com',
        firstName: 'Scout',
        lastName: 'McScout',
        username: 'ScoutOk',
        password: 'ibescout',
        isAdmin: true
      })
    )
    .then(() => products.map(
      product => Product.create(product))
    )
  )


  it('creates an order with status processing', () =>
    Order.create({
    })
    .then(order =>
      expect(order.status).to.eql('processing')
    )
  )

  it('creates an order with user_id', () =>
    Order.create({
      user_id: 1
    })
    .then(order =>
      expect(order.user_id).to.eql(1)
    )
  )

  it('Adding an association', () =>
    Order.create({
      user_id: 1
    })
    .then(order =>
      OrderProduct.create({
        order_id: order.id,
        product_id: 3,
        pricePerUnit: 10,
        quantity: 4
      })
      .then(orderProduct => {
        expect(orderProduct.quantity).to.eql(4);
        expect(orderProduct.pricePerUnit).to.not.be.null
      }
      )
    )
  )

  it('Adding multiple lines for same order at same time', () => {
    let input = [
      {
        product_id: 4,
        price: 5,
        quantity: 2
      },
      {
        product_id: 1,
        price: 100,
        quantity: 100
      },
    ]
    Order.create({
      user_id: 1
    })
    .then(order =>
      input.map((item) =>
        OrderProduct.create({
          order_id: order.id,
          product_id: item.product_id,
          pricePerUnit: item.price,
          quantity: item.quantity
        }).then(order => {
          expect(order.quantity).to.eql(item.quantity)
          expect(order.product_id).to.eql(item.product_id)
      })
      )
    )
  }
  )

  it('updates inputs total upon create', () => {
    let input = [
      {
        product_id: 4,
        price: 5,
        quantity: 2
      },
      {
        product_id: 1,
        price: 100,
        quantity: 100
      },
    ]

    let total = 0

    input.map((ele)=>{
      total += ele.price * ele.quantity
    })

    Order.create({
      user_id: 1,
      total: total
    })
    .then(order =>
      input.map((item) =>
        OrderProduct.create({
          order_id: order.id,
          product_id: item.product_id,
          pricePerUnit: item.price,
          quantity: item.quantity
        }).then(opRow => {
          expect(order.total).to.eql(10010)
      })
      )
    )
  }
     )


})


