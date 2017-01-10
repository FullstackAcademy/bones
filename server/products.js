'use strict'

const db = require('APP/db')
const Product = require('../db/models/product')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Product.findAll()
    .then(products => res.json(products))
    .catch(next))
  .post('/', (req, res, next) =>
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(next))
