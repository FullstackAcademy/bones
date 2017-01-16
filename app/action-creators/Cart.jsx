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
			else if(getState().Session.order)currentOrderId= getState().Session.order.id
			if(userId) authId = {user_id : userId}
			Promise.resolve()
			.then(()=>{
				if(!order && !getState().Session.order){
					// console.log('yo')
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
			 searchingForLine = order.lineItems.filter(val => val["product_id"] === productId)
			// console.log(searchingForLine)

			if(!searchingForLine.length){
				return axios.post(`api/lineItems`, {order_id: currentOrderId, product_id: productId})
			}
			else {
				let newCount = searchingForLine[0].count+1
				return axios.put(`api/lineItems/${searchingForLine[0].id}`, {count: newCount})

			}
		 })
	}
}

export function loadCart (){
	 return function(dispatch, getState){

	 }
}
