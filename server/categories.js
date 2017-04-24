'use strict'

const db = require('APP/db')
const Category = db.model('categories')

console.log('@Categories Route')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) =>
      Category.findAll()
        .then(categories => res.json(categories))
        .catch(next))
  // .post('/',
  //   (req, res, next) =>
  //     Category.create(req.body)
  //     .then(singleCategory => res.status(201).json(singleCategory))
  //     .catch(next))
  .get('/:id',
    (req, res, next) =>
      Category.findById(req.params.id)
      .then(singleCategory => res.json(singleCategory))
      .catch(next))
