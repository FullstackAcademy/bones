const Product = require('APP/db/models/product')
const Celeb = require('APP/db/models/celeb')
const router = module.exports = require('express').Router()


// If there is a query route for a celebrity, 
// find all the products associated with them,
// otherwise, find all products

// **** Need to write a test ****
// **** for the req.query portion ****
router.get('/', function (req, res, next) {
  if (req.query.name) {
    Celeb.findOne({where: { name: req.query.name }})
      .then(celeb => {
        Product.findAll({where: { celebId: celeb.id }})
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
  Product.findbyId(req.params.productId)
    .then(product =>
      res.send(product))
    .catch(next)
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