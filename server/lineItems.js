'use strict'

const db = require('APP/db')
const LineItem = db.model('lineItem')

const Router = require('express').Router()

Router.get('/assignlineitems', (req,res,next)=>{
  LineItem.findAll()
  .then(allLines=> res.json(allLines))
})

Router.param('id', (req, res, next, id) => {
  if(isNaN(id)) res.sendStatus(500)
  else {
    LineItem.findById(id)
    .then(foundLine => {
      req.singleLine = foundLine
      if (!foundLine) res.sendStatus(404)
      next()
      return null;
    })
    .catch(next)
  }
})

Router.get('/', (req, res, next) => {
  LineItem.scope('products').findAll()
  .then(allLines => res.json(allLines))
})

Router.post('/' , (req, res, next) =>
  LineItem.create(req.body)
  .then(addedLine => res.status(201).json(addedLine))
  .catch(next))

Router.get('/:id', (req, res, next) => {
res.json(req.singleLine)
})

Router.put('/:id', ( req, res, next) => {
  req.singleLine.update(req.body)
  .then(updatedLine =>{
    res.json(updatedLine);
  })
})

Router.delete('/', (req, res, next)=>{
  LineItem.destroy(req.body)
  .then( () => res.status(204).end())
  .catch(next)
})

Router.delete('/:id', (req, res, next)=>{
  req.singleLine.destroy()
  .then( () => res.status(204).end())
  .catch(next)
})

module.exports = Router
