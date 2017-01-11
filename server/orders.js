'use strict'

const db = require('APP/db')
const Order = db.model('orders')

const Router = require('express').Router()

Router.param('id',(req,res,next,id)=>{
  if(NaN(id)) res.sendStatus(500)
  else {
    Order.findById(id)
    .then(order=>{
      if(!order) res.sendStatus(404)
      next()
      return null;
    })
    .catch(next)
  }
})

Router.get('/',(req,res,next)=>{
  Order.findAll()
  .then(orders=> res.json(orders))
})

Router.get('/:id',(req,res,next)=>{
  Order.findById(req.params.id)
  .then(order=> res.json(order))
})

module.exports = Router
