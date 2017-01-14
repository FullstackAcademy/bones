import {RECEIVE_PRODUCTS} from '../constants'
import axios from 'axios'

const receiveProducts = function(products) {
	return {
		type: RECEIVE_PRODUCTS,
		products
	}
}



export const addToCart = function(productId) {
	return function(dispatch, getState) {
    console.log('testing to see if i have active order')
    if(!getState().order){
      console.log('I do not have an active order')
      axios.post('api/orders', {})
      .then(newOrder =>{
        console.log(newOrder)
      })
    }
    else {
      console.log('I have an active order')
    }




	}
}




axios.post('/api/products')
  .then(res=>res.data)
  .then(addedOrder)
