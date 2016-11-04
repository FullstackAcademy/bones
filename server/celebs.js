const Celeb = require('APP/db/models/celeb');
const Product = require('APP/db/models/product');
const {CelebProduct} = require('APP/db/models')
const router = require('express').Router();

router.get('/', (req, res, next) =>
  Celeb.findAll()
  .then(celebs => res.send(celebs))
  .catch(next)
  )

router.post('/', (req,res,next) =>
  Celeb.create(req.body)
  .then(createdCeleb => res.status(201).send(createdCeleb))
  .catch(next)
  )

router.get('/:celebId', (req,res,next) =>
  Celeb.findAll({
    where: {
      id: req.params.celebId
    },
    include: {
      model: Product
    }
  })
  .then(foundProdsByCeleb => res.send(foundProdsByCeleb))
  .catch(next)
  )

//below is an example of what response is sent in the GET /:celebId request
// [ { id: 2,
//     name: 'Emma Stone',
//     celebType: null,
//     list: 'A',
//     alive: true,
//     created_at: '2016-11-02T17:28:23.776Z',
//     updated_at: '2016-11-02T17:28:23.776Z',
//     products: [ [Object], [Object], [Object] ] } ]


router.put('/:celebId', (req,res,next) =>
  Celeb.update(req.body, {
    where: {
      id: req.params.celebId
    }
  })
  .then(updatedCeleb => res.send(updatedCeleb))
  .catch(next)
  )

router.delete('/:celebId', (req,res,next) =>
  Celeb.destroy({
    where:{
      id: req.params.celebId
    }
  })
  .then(destroyedCeleb => res.send({message: "Celebrity has been deleted"}))
  .catch(next)
  )

 module.exports = router;
