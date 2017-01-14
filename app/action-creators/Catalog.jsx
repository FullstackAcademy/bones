import {RECEIVE_PRODUCTS} from '../constants'
import axios from 'axios'

const receiveProducts = function(products) {
	return {
		type: RECEIVE_PRODUCTS,
		products
	}
}

export const loadProducts = function() {
	return function(dispatch) {
		axios.get('/api/products')
			.then(res => res.data)
			.then(products => {
				dispatch(receiveProducts(products))
			})
			.catch(err => console.error(err))
	}
}
