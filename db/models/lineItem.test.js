
const db = require('APP/db')
const Order = require('./order')
const Product = require('./product')
const LineItem = require('./lineItem')
const expect = require('chai').expect

describe('LineItem', () => {
 before('wait for the db', () => db.didSync)
 after('synchronize and clear database', () => db.sync({force: true}));
 describe('Working Associations', () => {
   it('LineItem belongs to Product', () => {
     let creatingProduct = Product.create({title: "Test"});
     let creatingLineItem = LineItem.create({})
     return Promise.all([creatingProduct, creatingLineItem])
        .then(([createdProduct, createdLineItem]) => {
            return createdProduct.addLineItem(createdLineItem)
        })
        .then(result => {
            return LineItem.findOne({
                where: {product_id: result.id}
            })
        })
        .then(foundLineItem => {
            expect(foundLineItem.product_id).to.exist
            return foundLineItem.product_id
        })
        .then(product_id => {
            return Product.findById(product_id)
        })
        .then(foundProduct => {
            expect(foundProduct.title).to.equal('Test')
        })

   })
   it('LineItem belongs to Order', () => {
     let creatingOrder = Order.create({status: "cart"});
     let creatingLineItem = LineItem.create({})
     return Promise.all([creatingOrder, creatingLineItem])
        .then(([createdOrder, createdLineItem]) => {
            return createdOrder.addLineItem(createdLineItem)
        })
        .then(result => {
            return LineItem.findOne({
                where: {order_id: result.id}
            })
        })
        .then(foundLineItem => {
            expect(foundLineItem.order_id).to.exist
            return foundLineItem.order_id
        })
        .then(order_id => {
            return Order.findById(order_id)
        })
        .then(foundOrder => {
            expect(foundOrder.status).to.equal('cart')
        })

   })
 })
 describe('Testing Instance Method', () => {
   it("Sets unit cost to product cost", () => {
     let creatingProduct = Product.create({title: "Test", unitPrice: 5});
     let creatingLineItem = LineItem.create({})
     return Promise.all([creatingProduct, creatingLineItem])
        .then(([createdProduct, createdLineItem]) => {
            return createdProduct.addLineItem(createdLineItem)
        })
        .then(product => {
            return LineItem.findOne({
                where: {product_id: product.id}
            })

        })
        .then(foundLineItem => {
            return foundLineItem.save()
        })
        .then(foundLineItem => {
          expect(foundLineItem.productDetail).to.equal('Test')
          expect(foundLineItem.unitCost).to.equal(5)
        })
   })
   it("Modifies the count correctly", () => {
     let creatingProduct = Product.create({title: "Test", unitPrice: 5});
     let creatingLineItem = LineItem.create({})
     return Promise.all([creatingProduct, creatingLineItem])
        .then(([createdProduct, createdLineItem]) => {
            return createdProduct.addLineItem(createdLineItem)
        })
        .then(product => {
            return LineItem.findOne({
                where: {product_id: product.id}
            })

        })
        .then(foundLineItem => {
            foundLineItem.increaseCount();
            expect(foundLineItem.count).to.equal(2)
            foundLineItem.increaseCount(3)
            expect(foundLineItem.count).to.equal(5)
        })
   })
 })
})
