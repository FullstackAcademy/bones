/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const User = db.model('users');
const Order = db.model('orders');
const CartProduct = db.model('cartProducts');
const Rock = db.model('rocks');
const router = require('express').Router();


// Get all rocks pertaining to an order
router.get('/:userId', (req, res, next) => {
  let modelWhere;
  //if it a guest, pass req.params as 'undefined'
  console.log(req.params.userId);
  if (req.params.userId === 'undefined') {
    modelWhere = {
      status: 'in-cart',
      sessionId: req.session.id
    };
  } else {
    modelWhere = {
      user_id: req.params.userId,
      status: 'in-cart'
    };
  }
  Order.findOne({
    where: modelWhere
  })
  .then(order => {
    return CartProduct.findAll({
      where: {order_id: order.id},
      include: [Rock, Order]
    });
  })
  .then(cartProducts => {
    res.send(cartProducts);
  })
  .catch(next);
});

// Add product to existing shopping cart
// Pass in req.body.rockQuantity. If rockQuanity is not set, it will be set to 1 by default.
router.post('/user/:userId/rock/:rockId', (req, res, next) => {
  // Find the shopping cart of the user. If the shopping cart doesn't exist, create one
  let modelWhere;
  //if it a guest, pass req.params as 'undefined'
  if (req.params.userId === 'undefined') {
    modelWhere = {
      status: 'in-cart',
      sessionId: req.session.id
    };
  } else {
    modelWhere = {
      user_id: req.params.userId,
      status: 'in-cart'
    };
  }
  Order.findOrCreate({
    where: modelWhere,
    include: [CartProduct]
  })
  .then(order => {
    // res.json(order)
    // Find the shopping car with matching order
    CartProduct.findOne({
      where:{
        order_id: order[0].id,
        rock_id: req.params.rockId
      }
    })
    .then(cartProduct => {
      let incrementQuantity, rockQuantity = req.body.rockQuantity;

      // If there is a shopping cart with the product, increment the quanity by 1
      if(cartProduct) {
        // Check if the req.body has specified exact number of rock quantity.
        // Add that number of rocks to the order
        if(rockQuantity) {
          incrementQuantity = rockQuantity
        } else {
          // If req.body doesn't specify rock quantity, just increment order quantity by one
          incrementQuantity = cartProduct.quantity + 1 ;
        }

        return cartProduct.update({
          quantity: incrementQuantity
        })
        .then(updatedProduct => {
          res.json(updatedProduct)
        })
      } else {

        // Check if the req.body has specified exact number of rock quantity.
        // Add that number of rocks to the order
        if(rockQuantity) {
          incrementQuantity = rockQuantity
        } else {
          // If req.body doesn't specify rock quantity, just set increment to 1
          incrementQuantity = 1;
        }

        // If the shopping cart doesn't have the product, add rock and quantity to the shopping cart
          return CartProduct.create({
            order_id: order[0].id,
            rock_id: req.params.rockId,
            quantity: incrementQuantity
          })
          .then(cartProduct => {
            res.json(cartProduct)
          })
      }

    })
    .catch(next);

  })
  .catch(next);
});


// Delete the whole shopping cart or order
//Logged in Users
router.delete('/user/:userId', (req, res, next) => {
  let modelWhere;
  //if it a guest, pass req.params as 'undefined'
  if (req.params.userId === 'undefined') {
    modelWhere = {
      status: 'in-cart',
      sessionId: req.session.id
    };
  } else {
    modelWhere = {
      user_id: req.params.userId,
      status: 'in-cart'
    };
  }
  Order.findOne({
    where: modelWhere,
    include: [CartProduct]
  })
  .then(order => {
    CartProduct.destroy({
      where: {order_id: order.id}
    })
    res.sendStatus(200);

  });
});


// Delete particular rock from the order
router.delete('/user/:userId/rock/:rockId', (req, res, next) => {
  let modelWhere;
  //if it a guest, pass req.params as 'undefined'
  if (req.params.userId === 'undefined') {
    modelWhere = {
      status: 'in-cart',
      sessionId: req.session.id
    };
  } else {
    modelWhere = {
      user_id: req.params.userId,
      status: 'in-cart'
    };
  }
  Order.findOne({
    where: modelWhere,
    include: [CartProduct]
  })
  .then(order => {
    CartProduct.destroy({
      where: {
        order_id: order.id,
        rock_id: req.params.rockId
      }
    })
    res.sendStatus(200);

  });
})

module.exports = router;
