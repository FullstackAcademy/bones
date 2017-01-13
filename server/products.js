'use strict'

const db = require('APP/db')
const Product = db.model('products')

const Router = require('express').Router()

Router.param('id',(req,res,next,id)=>{
  if(isNaN(id)) res.sendStatus(500)
  else {
    Product.findById(id)
    .then(foundLine=>{
      req.singleLine = foundLine
      if(!foundOrder) res.sendStatus(404)
      next()
      return null;
    })
    .catch(next)
  }
})

Router.get('/',(req,res,next)=>{
  Product.findAll()
  .then(allLines=> res.json(allLines))
})

Router.post('/' ,(req, res, next) =>
  Product.create(req.body)
  .then(addedLine => res.status(201).json(addedLine))
  .catch(next))

Router.get('/:id',(req,res,next)=>{
res.json(req.singleLine)
})

Router.put('/:id',(req, res, next)=>{
  req.singleLine.update(req.body)
  .then(updatedLine =>{
    res.send(updatedLine)
  })
})
Router.delete('/:id', (req, res, next)=>{
  req.singleLine.destroy()
  .then( ()=> res.status(204).end())
  .catch(next)
})


module.exports = Router
