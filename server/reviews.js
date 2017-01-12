'use strict'

const db = require('APP/db')
const Review = db.model('reviews')
// const models = require('../db/models');
// const Review = models.Review;
// const Review = require('APP/db/models/review')
const Router = require('express').Router()



Router.param('id',(req,res,next,id)=>{
  console.log(id)
  if(isNaN(id)) res.sendStatus(500)
  else {
    Review.findById(id)
    .then(review=>{
      console.log("test")
      if(!review) res.sendStatus(404)
      next()
      return null;
    })
    .catch(next)
  }
  next()
})

Router.get('/',(req,res,next)=>{
  Review.findAll()
  .then(reviews=> {
    console.log(reviews)
    res.json(reviews)})
})

Router.get('/:id',(req,res,next)=>{
  review.findById(req.params.id)
  .then(review=> res.json(review))
})

Router.post('/', (req,res,next)=>{
  Review.create(req.body)
  .then(review => res.status(201).json(review))
  .catch(next)
})

module.exports = Router
