import {CREATE_ORDER} from '../constants'
import axios from 'axios'

const addOrder = function(addedOrder) {
	return {
		type: CREATE_ORDER,
		addedOrder
	}
}



export  function addToCart (userId, order, productId) {
	return function(dispatch, getState) {
			let authId = {}
			let currentOrderId
			if(order) currentOrderId = order.id
			if(userId) authId = {user_id : userId}
			Promise.resolve()
			.then(()=>{
				if(!order){

	      return axios.post('api/orders', authId)
	      .then(newOrder =>{
					currentOrderId = newOrder.data.id
					dispatch(addOrder(newOrder.data))
	       })
			 }
		 })
			 .then(()=>{
			 return axios.get(`api/orders/${currentOrderId}`)
			 .then(order=>order.data)
			 .then(order=>{
				return order
			 })
		 })
		 .then((order)=>{
			 let searchingForLine = null
			 searchingForLine = order.lineItems.filter(val => val[product_id] === productId)
			// console.log(searchingForLine)
		 })




	}
}




// axios.post('/api/products')
//   .then(res=>res.data)
//   .then(addedOrder)
