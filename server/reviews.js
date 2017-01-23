const express = require('express');
const router = express.Router();
const db = require('APP/db');
const Review = db.model('review');
const Product = db.model('products');


// get all the reviews for a given product
router.get('/:productId', (req, res, next) => {
  Review.findAll({where: {product_id: req.params.productId}})
  .then(products => {
    res.json(products)
  })
  .catch(next);
});

// write a review for a given product
router.post('/:productId', (req, res, next) => {
  Review.create(req.body)
  .then(() => res.sendStatus(201))
  .catch(next);
});

module.exports = router;