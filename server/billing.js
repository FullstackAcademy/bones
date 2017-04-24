'use strict'

const db = require('APP/db')
const Billing = db.model('billings')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) =>
      Billing.findAll()
        .then(billingInfo => res.json(billingInfo))
        .catch(next))
  .post('/',
    (req, res, next) =>
      Billing.create(req.body)
        .then(createdBill => res.json(createdBill))
        .catch(next))
  .get('/:id',
    (req, res, next) =>
      Billing.findById(req.params.id)
      .then(singleBill => res.json(singleBill))
      .catch(next))
