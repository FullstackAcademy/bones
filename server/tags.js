/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const Tag = db.model('tags');
const Rock = db.model('rocks');

const router = require('express').Router();

// get all the tags and the associated rocks
router.get('/', (req, res, next) => {
  Tag.findAll({ include: [Rock] })
    .then(tags => res.json(tags))
    .catch(next);
});

// get a single tag and all respective rocks
router.get('/:id', (req, res, next) => {
  Tag.findOne({
    where: { id: req.params.id },
    include: [Rock]
  })
    .then(tag => res.json(tag))
    .catch(next);
});

// add a tag
router.post('/addTag', (req, res, next) => {
  Tag.create(req.body)
    .then(tag => res.status(201).send(tag))
    .catch(next);
});

// edit a tag
router.put('/edit/:id', (req, res, next) => {
  Tag.findById(req.params.id)
    .then(tag => tag.update(req.body))
    .then(tag => res.status(200).send(tag))
    .catch(next);
});

module.exports = router;
