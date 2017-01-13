'use strict'

const db = require('APP/db')
const Order = db.model('orders')

const Router = require('express').Router()

Router.param('id',(req,res,next,id)=>{
  if(isNaN(id)) res.sendStatus(500)
  else {
    Order.findById(id)
    .then(foundOrder=>{
      req.singleOrder = foundOrder
      if(!foundOrder) res.sendStatus(404)
      next()
      return null;
    })
    .catch(next)
  }
})

Router.get('/',(req,res,next)=>{
  Order.findAll()
  .then(allOrders=> res.json(allOrders))
})

Router.post('/' ,(req, res, next) =>
  Order.create(req.body)
  .then(addedOrder => res.status(201).json(addedOrder))
  .catch(next))

Router.get('/:id',(req,res,next)=>{
res.json(req.singleOrder)
})

Router.put('/:id',(req, res, next)=>{
  req.singleOrder.update(req.body)
  .then(updatedOrder =>{
    res.send(updatedOrder)
  })
})
Router.delete('/:id', (req, res, next)=>{
  req.singleOrder.destroy()
  .then( ()=> res.status(204).end())
  .catch(next)
})


module.exports = Router
