'use strict'

const db = require('APP/db')
const Order = db.model('orders')

module.exports = require('express').Router()
  .get('/',//need to make this FORBIDDEN unless you are an admin
    (req, res, next) =>
      Order.findAll()
        .then(orders => res.json(orders))
        .catch(next))
  //Not restful. Should ask for an ID of an order
  .get('/currentOrder',
    (req, res, next) => {
      if(req.user){
        //Then we can findById and avoid indexing stuff below
        Order.findAll({
          where: {
            user_id: req.user.id,//we'll figure this out after OATH/figuring out passport
            status: 'incomplete',
          }
        })
        .then(orders=>{
          res.json(orders[0]);
        })
        .catch(next)
      }
      else {
        res.json(res.session.currentOrder);//currentOrder is an array of Product On Orders
      }
    })
  .post('/currentOrder',
    (req, res, next) => {
      let newPoO = req.body.PoO; //poo?

      //I would just not hit this route for non-authed users. Make it forbidden
      // A separate place should handle session orders for anon users
      if(req.user){
        Order.findAll({  //Could there be multiple return values?
          where: {
            user_id: req.user.id,//we'll figure this out after OATH/figuring out passport
            status: 'incomplete',
          }
        })
        .then(orders=>orders[0].id)  //eww. Also no response ever
        // .then(currOrderId=>)   //finish later
        .catch(next)
      }
      else {
        req.session.currentOrder.push(req.body.PoO);
        res.json(res.session.currentOrder);
      }
    })
