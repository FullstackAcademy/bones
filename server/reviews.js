'use strict'

const db = require('APP/db')
const Review = db.model('reviews')
// const models = require('../db/models');
// const Review = models.Review;
// const Review = require('APP/db/models/review')
const Router =


module.exports = require('express').Router()
.param('id', (req, res, next, id) => {
  if (isNaN(id)) res.sendStatus(500)
  else {
    Review.findById(id)
    .then(foundReview => {
		req.singleReview = foundReview;
      if (!foundReview) res.sendStatus(404)
      next()
    })
    .catch(next);
  }

})
.get('/', (req, res, next) => {
  Review.findAll({where: req.query})
  .then(foundReviews=> {
    res.json(foundReviews)});
})
.get('/:id', (req, res, next) => {
	res.json(req.singleReview);
})
.post('/', (req, res, next) => {
  Review.create(req.body)
  .then(createdReview => res.status(201).json(createdReview))
  .catch(next)
})
.put('/:id', (req, res, next) => {
	req.singleReview.update(req.body)
	.then(updatedUser => {
		res.send(updatedUser)
	})
	.catch(next)
})
.delete('/:id', function (req, res, next) {
  req.singleReview.destroy()
  .then( () => res.status(204).end())
  .catch(next);
})
