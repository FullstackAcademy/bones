import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT} from '../constants'
import axios from 'axios'

const receiveProducts = function(products) {
	return {
		type: RECEIVE_PRODUCTS,
		products
	}
}

const receiveProduct = function(product) {
	return {
		type: RECEIVE_PRODUCT,
		product
	}
}

export const loadProducts = function() {
	return function(dispatch, getState) {
		axios.get('/api/products')
			.then(res => res.data)
			.then(products => {
				dispatch(receiveProducts(products))
			})
			.catch(err => console.error(err))
	}
}

export const getProduct = function(productId) {
	return function(dispatch, getState) {
		return axios.get(`/api/products/${productId}`)
		.then(res => res.data)
		.then(product => {
			dispatch(receiveProduct(product))
		})
		.catch(err => console.error(err))
	}
}