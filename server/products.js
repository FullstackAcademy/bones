const Product = require('APP/db/models/product')
const Celeb = require('APP/db/models/celeb')
const CelebProduct = require('APP/db/models/index').CelebProduct
const Review = require('APP/db/models/review')
const router = module.exports = require('express').Router()


// If there is a query route for a celebrity,
// find all the products associated with them,
// otherwise, find all products

// **** Need to write a test ****
// **** for the req.query portion ****
router.get('/', function (req, res, next) {
  if (req.query.name) {
    Product.findAll({include: {
      model: Celeb,
      where: {
        name: req.query.name
      }
    }})
    .then(products =>{
      res.status(200).send(products)
    })
    .catch(next)
  }
  else {
    Product.findAll()
      .then(products =>
        res.send(products))
      .catch(next)
  }
})

// Find one existing product based on id
router.get('/:productId', function (req, res, next) {
  Product.findById(req.params.productId)
    .then(retproduct =>{
      let product = retproduct
      Review.findAll({where: {product_id: req.params.productId}})
      .then(retreviews => {
        let reviews = retreviews
        res.send({product, reviews})
      })
    })
    .catch(err => console.log(err))
})

// Create a new product
router.post('/', function (req, res, next) {
  Product.create(req.data)
    .then(() =>
      res.status(201).send('You\'ve added a shiny new celeb product! Glitter time!!!'))
    .catch(next)
})

// Update a current product
router.put('/:productId', function (req, res, next) {
  Product.findById(req.params.productId)
    .then(product => {
      product.update(req.body)})
    .then(() => {
      res.status(201).send('Your newly-updated product is way shinier!')
    })
    .catch(next)
})

// Delete an existing product
router.delete('/:productId', function (req, res, next){
  Product.destroy({where: { id: req.params.productId }})
    .then(() =>
      res.status(200).send('You\'ve deleted your unshiny product. Good riddance, matte.'))
    .catch(next)
})

module.exports = router;
