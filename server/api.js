/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const api = module.exports = require('express').Router();

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/rocks', require('./rocks'))
  .use('/categories', require('./categories'))
  .use('/tags', require('./tags'))
  .use('/orders', require('./orders'))
  .use('/carts', require('./cartProducts'));

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
