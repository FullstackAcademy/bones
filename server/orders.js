const Order = require('APP/db/models/order');
const Product = require('APP/db/models/product');
const OrderProduct = require('APP/db/models/orderProduct')
const router = require('express').Router();
const Promise = require('bluebird');
var session = require('express-session');

router.get('/', (req, res, next) =>
  Order.findAll()
  .then(orders => res.send(orders))
  .catch(next)
)

router.get('/:orderId', (req, res, next) =>
  Order.findById(req.params.orderId)
  .then(order => res.send(order))
  .catch(next)
)

router.get('/status/:status', (req, res, next) =>
  Order.findAll({where: {status: req.params.status}})
  .then(orders => res.send(orders))
  .catch(next)
)

router.get('/users/:userId', (req, res, next) => {
  Order.findAll({
    where: {
      user_id: req.params.userId
    },
    include: [{
      model: Product
    }]
  })
  .then(orders => {
    res.send(orders)})
  .catch(err => console.log(err))
}
)

//unused, filtering on the client-side
router.get('/users/:userid/:status', (req, res, next) =>
  Order.findAll({where: {user_id: req.params.userid, status: req.params.status}})
  .then(orders => res.send(orders))
  .catch(next)
)

router.get('/ordersproducts/:orderId', (req, res, next) => {
  return Order.findAll({
    where: {
      id: req.params.orderId
    },
    include: [{
      model: Product
      // through: OrderProduct
    }]
  })
  .then(response=> res.send(response))
  .catch(err => console.log(err))
}
  )

router.post('/', (req, res, next) =>{
  console.log("data", req.body);
  let orderInfo = {
    total: req.body.total,
    user_id: req.body.user
  }

  let orderProducts = req.body.products

  Order.create(orderInfo)
  .then(order =>
    Promise.map(orderProducts, (orderProduct) =>
      OrderProduct.create({
        order_id: order.id,
        product_id: orderProduct.id,
        pricePerUnit: orderProduct.price,
        quantity: orderProduct.quantity
      })
    ).then(rows =>

       res.status(201).send(order)

      )
  )
  .catch(next)
})

router.put('/:orderId', (req, res, next) => {
  let orderInfo = {}
  //need to account for what is included in update request
  if (req.body.total) orderInfo.total = req.body.total;
  if (req.body.user_id) orderInfo.user_id = req.body.user_id;
  if (req.body.status) orderInfo.status = req.body.status;
  if (req.body.shippingDate) orderInfo.shippingDate = req.body.shippingDate
  let orderProducts = req.body.products
  Order.update(orderInfo,{where: {id: req.params.orderId}})
  .then(order => {
    if (orderProducts) {
      Promise.map(orderProducts, (orderProduct)=>
        OrderProduct.update({pricePerUnit: orderProduct.price,
        quantity: orderProduct.quantity},{where: {order_id: req.params.orderId,
          product_id: orderProduct.product_id}})
        .then((rowsChanged) => {
          if(rowsChanged[0] === 0) {
            OrderProduct.create({
              order_id: req.params.orderId,
              product_id: orderProduct.id,
              pricePerUnit: orderProduct.price,
              quantity: orderProduct.quantity
            })
          }
        })
      ).then( rows => {
        res.status(200).send(order)
      }
    )
    } else {
      res.status(200).send(order)
    }
  }
  )
  .catch(next)
  }
)

router.delete('/:orderId', (req, res, next) =>{
  Order.destroy({where: {id: req.params.orderId}})
  .then(removedOrder => res.send({message:'order has been removed'}))
  .catch(next)
})

//need a route for deleting a certain product from an order
router.delete('/:orderId/:productId', (req, res, next) => {
  OrderProduct.destroy({where: {order_id: req.params.orderId, product_id: req.params.productId}})
  .then(removedProduct => res.send({message:'product has been removed'}))
  .catch(next)
})
module.exports = router;