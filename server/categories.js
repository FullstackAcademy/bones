/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const Rock = db.model('rocks');
const Category = db.model('categories');

const router = require('express').Router();

// get all the categories and respective rocks
router.get('/', (req, res, next) => {
  Category.findAll({ include: [Rock] })
    .then(categories => res.json(categories))
    .catch(next);
});

// get a single category
// router.get('/:id', (req, res, next) => {
//   Category.findOne({
//     where: { id: req.params.id },
//     include: [Rock]
//   })
//     .then(category => res.json(category))
//     .catch(next);
// });

// Get all rocks pertaining to a category
router.get('/:categoryName', (req, res, next) => {
  Category.findOne({
    where: { name: req.params.categoryName},
  })
    .then(category => {
      return Rock.findAll({ where: { category_id: category.id }})
    })
    .then(rocks => res.json(rocks))
    .catch(next);
})

// add a category
router.post('/addCategory', (req, res, next) => {
  Category.create(req.body)
    .then(category => res.status(201).send(category))
    .catch(next);
});

// edit a category
router.put('/edit/:id', (req, res, next) => {
  Category.findById(req.params.id)
    .then(category => category.update(req.body))
    .then(category => res.status(200).send(category))
    .catch(next);
});
module.exports = router;
