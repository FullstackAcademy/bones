'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const User = db.model('users')

const Router = require('express').Router()
Router.get('/isOrder', (req, res, next)=>{
  res.json(req.session)
})

Router.param('id',(req,res,next,id)=>{
  if(isNaN(id)) res.sendStatus(500)
  else {
    Order.scope('lineItems').findById(id)
    .then(foundOrder=>{
      req.singleOrder = foundOrder
      if(!foundOrder) res.sendStatus(404)
      next()
      return null;
    })
    .catch(next)
  }
})

Router.use('/cart', (req, res, next)=>{
  req.session.cart = req.body
})

Router.get('/',(req,res,next)=>{
  Order.scope('lineItems').findAll()
  .then(allOrders=> res.json(allOrders))
})

Router.post('/' ,(req, res, next) =>
{console.log('req.body', req.body)
  Order.create(req.body)
  .then(addedOrder => {
    req.session.order = {id: addedOrder.id}
    res.status(201).json(addedOrder)})
  .catch(next)
})

Router.get('/:id',(req,res,next)=>{
res.json(req.singleOrder)
})



Router.put('/:id',(req, res, next)=>{
  req.singleOrder.update(req.body)
  .then(updatedOrder =>{
    res.json(updatedOrder)
  })
})

// Router.put('/:id/:userId', (req, res, next)=>{
//   User.findById(req.params.userId)
//   .then(user =>{
//     user.addOrder(req.singleOrder.id)
//   })
// })


Router.delete('/:id', (req, res, next)=>{
  req.singleOrder.destroy()
  .then( ()=> res.status(204).end())
  .catch(next)
})


module.exports = Router
