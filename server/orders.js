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
  Order.placeOrder(req.body.address, req.body.email, req.body.items)
  .then(() => res.sendStatus(201))
  .catch(next);
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