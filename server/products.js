'use strict'

const db = require('APP/db')
const Product = db.model('products')

console.log('@ Products route')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) =>
      Product.findAll()
        .then(products => res.json(products))
        .catch(next))
  // .post('/',
  //   (req, res, next) =>
  //     Product.create(req.body)
  //     .then(singleProduct => res.status(201).json(singleProduct))
  //     .catch(next))
  .get('/:id',
    (req, res, next) =>
      Product.findById(req.params.id)
      .then(singleProduct => res.json(singleProduct))
      .catch(next))
