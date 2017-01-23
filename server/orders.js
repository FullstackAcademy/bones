const express = require('express');
const router = express.Router();

const db = require('APP/db');
const Order = db.model('order');
const Product = db.model('products');
const OrderProducts = db.model('order_products');

router.get('/:orderId', (req, res, next) =>  {
  Order.findById(req.params.orderId, {
    include: [Product]
  })
  .then(order => res.json(order))
  .catch(next);
});

router.post('/', function(req, res, next) {
  let prods = [2,3];
  let createdOrder;
  Order.create({
    address: req.body.address,
    user_id: req.body.user
  })
  .then(order => createdOrder = order)
  .then(() => db.Promise.map(prods, productId => Product.findById(productId)))
  .then(products => db.Promise.map(products, product => createdOrder.addProduct(product, {price: product.price})))
  .then(() => OrderProducts.calculateTotal(createdOrder.id))
  .then(total => createdOrder.update({
    totalPrice: total
  }))
  .then(() => res.sendStatus(201))
  .catch(console.log);
});



router.put('/:orderId', (req, res, next) => {
  Order.update(req.body, {
    where: {
      id: req.params.orderId
    }
  })
  .then(order => res.sendStatus(204))
  .catch(next);
});

router.post('/:orderId/products', (req, res, next) => {
  OrderProducts.create({
    order_id: req.params.orderId,
    product_id: req.body.productId
  })
  .then(() => res.sendStatus(201))
  .catch(next);
});

router.put('/:orderId/products/:productId', (req, res, next) => {
  // Order.update()
});

router.delete('/:orderId/products/:productId', (req, res, next) => {
  OrderProducts.destroy({
    where: {
      order_id: req.params.orderId,
      product_id: req.params.productId
    }
  })
  .then(() => res.sendStatus(204))
  .catch(next);
});


module.exports = router;