const db = require('APP/db');
const express = require('express');
const Review = require('APP/db/models/review');

const router = express.Router();

router.get('/', (req, res, next) => {
  Review.findAll()
  .then(reviews =>{
    res.json(reviews);
  })
  .catch(next)
})

router.get('/:reviewId', (req, res, next) => {
  Review.findById(req.params.reviewId)
  .then(reviews =>{
    res.json(reviews);
  })
  .catch(next)
})

router.get('/products/:productId', (req, res, next) => {
  Review.findAll({where: {product_id: req.params.productId}})
  .then(reviews => {
    res.json(reviews);
  })
  .catch(next)
})

router.get('/users/:userId', (req, res, next) => {
  Review.findAll({where: {user_id: req.params.userId}})
  .then(reviews => {
    res.json(reviews);
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  Review.create(req.body)
  .then( review => {
    res.status(201).send('review created')
  })
  .catch(next)
})

router.put('/:reviewId', (req, res, next) => {
  Review.update(req.body, {where: {id: req.params.reviewId}})
  .then( review => {
    res.status(201).send('review updated')
  })
})

router.delete('/:reviewId', (req, res, next) => {
  Review.destroy({where: {id: req.params.reviewId}})
  .then(() => {
    res.sendStatus(204);
  })
})




module.exports = router
