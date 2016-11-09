'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

const User = require('APP/db/models/user');
const customUserRoutes = require('express').Router()

// Custom routes go here.

const user = require('express').Router();
module.exports = user;

user.get('/', function(req, res, next){
    User.findAll()
    .then(function(users){
        //console.log("users for routes", users);
        res.json(users);
    })
    .catch(next);
})
//

user.get('/:userId', function(req, res, next){
    if (!req.user) {
        User.findById(req.params.userId)
        .then(function(users){
           // console.log("single user", users);
            res.json(users);
        })
        .catch(next);
        //tmp change it should return 401
    }else{
        //console.log('IN USER GET')
        User.findById(req.params.userId)
        .then(function(users){
            //console.log("single user", users);
            res.json(users);
        })
        .catch(next);
    }
})


user.post('/', function(req, res, next){
    User.create(req.body)
    .then(function(user){
        res.status(201).json(user);
    })
    .catch(next);
})

user.put('/:userId', function(req, res, next){
    User.update(req.body,{where:{id:req.params.userId}})
    .then(function(user){
        if(!user){
            res.status(404).send();
        }else{
            res.status(200).send();
        }
    })
    .catch(next);
})

user.delete('/:userId', function(req, res, next){
    User.destroy({where:{id:req.params.userId}})
    .then(function(){
        res.status(204).send();
    })
    .catch(next)

})

// const users = epilogue.resource({
//   model: db.model('users'),
//   endpoints: ['/users', '/users/:id']
// })


// const {mustBeLoggedIn, selfOnly, forbidden, catcherr} = epilogue.filters
// users.delete.auth(mustBeLoggedIn)
// users.delete.auth(selfOnly('delete'))
// //users.list.auth(forbidden('cannot list users'))
// users.read.auth(mustBeLoggedIn)

