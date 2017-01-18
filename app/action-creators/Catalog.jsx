import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT, RECEIVE_REVIEWS} from '../constants'
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

const receiveReviews = function(reviews) {
	return {
		type: RECEIVE_REVIEWS,
		reviews
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

export const getReviews = function(productId) {
		return function(dispatch, getState) {
		return axios.get(`/api/reviews/`, {where: {product_id: productId}})
		.then(res => res.data)
		.then(review => {
			dispatch(receiveReviews(review))
		})
		.catch(err => console.error(err))
	}
}

//		return axios.get(`/api/reviews?product_id=${productId}`)
