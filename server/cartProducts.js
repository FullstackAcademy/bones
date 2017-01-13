/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const User = db.model('users');
const Order = db.model('orders');
const CartProduct = db.model('cartProducts');
const Rocks = db.model('rocks');
const router = require('express').Router();


// Get all rocks pertaining to an order
router.get('/:orderId', (req, res, next) => {
  CartProduct.findAll({
    where: {order_id:req.params.orderId},
    include: [Rocks]
  })
    .then(cartProducts => {
      res.send(cartProducts);
    })
    .catch(next);
});

// router.post('/', (req, res, next) => {
//   Order.create(req.body)
//     .then(newOrder => {
//       res.status(201).send(newOrder);
//     })
//     .catch(next);
// });

// router.put('/edit/:id', (req, res, next) => {
//   Order.findOne({
//     where: { id: req.params.id }
//   })
//     .then(order => order.update(req.body))
//     .then(updatedOrder => res.status(204).send(updatedOrder))
//     .catch(next);
//   // Order.update(req.body, { where: { id: req.params.id }, returning: true
//   // })
//   //   .then(updatedOrder => {
//   //     // console.log(updatedOrder[1][0].dataValues)
//   //     res.status(204).send(updatedOrder[1][0].dataValues);
//   //   })
//   //   .catch(next);
// });

module.exports = router;
