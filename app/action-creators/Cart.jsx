import {ADD_TO_SESSION, CREATE_LINE_ITEMS} from '../constants'
import axios from 'axios'
const loadSESSION = function(session) {
	return {type: ADD_TO_SESSION, session}
}
const loadLineItems = lineItems => {
	return {type: CREATE_LINE_ITEMS, lineItems}
}
export function addToCart(userId, order, productId) {
	return function(dispatch, getState) {
		let authId = {}
		let currentOrderId
		if (order)
			currentOrderId = order.id
		else if (getState().Session.order)
			currentOrderId = getState().Session.order.id
		if (userId)
			authId = {
				user_id: userId
			}
		Promise.resolve().then(() => {
			if (!order && !getState().Session.order) {
				return axios.post('api/orders', authId).then(newOrder => {
					currentOrderId = newOrder.data.id
				})
			}
		}).then(() => {
			return axios.get(`api/orders/${currentOrderId}`).then(order => order.data).then(order => {
				//console.log(order)
				return order
			})
		}).then((order) => {
			let searchingForLine = null
			searchingForLine = order.lineItems.filter(val => val["product_id"] === productId)
			Materialize.toast('Item added to cart!', 2000)
			if (!searchingForLine.length) {
				return axios.post(`api/lineItems`, {
					order_id: currentOrderId,
					product_id: productId
				})
			} else {
				let newCount = searchingForLine[0].count + 1
				return axios.put(`api/lineItems/${searchingForLine[0].id}`, {count: newCount})
			}
		}).then(() => {
			dispatch(reloadSession())
		})
	}
}
export function reloadSession() {
	return function(dispatch, getState) {
		axios.get('/api/orders/isOrder').then(res => res.data).then(session => {
			if (!getState().auth.id && session.order) {
				return axios.get(`api/orders/${session.order.id}`)
			} else if (getState().auth.id) {
				return axios.get(`api/users/${getState().auth.id}/orders`)
			}
		}).then((result) => {
			if (result)
				dispatch(loadSESSION(result.data))
		}).catch(err => console.error(err))
	}
}
export function dumpCartItems(orderId) {
	return function(dispatch, getState) {
		axios({
			method: 'delete',
			url: 'api/lineItems',
			data: {
				where: {
					order_id: orderId
				}
			}
		}).then((removed) => {
			Materialize.toast('Your cart has been deleted', 4000);
			dispatch(reloadSession())
		})
	};
}
export function buildLineItems() {
	return function(dispatch, getState) {
		if (getState().Session.order) {
			let lineItemsArr = getState().Session.order.lineItems
			lineItemsArr.map(lineItem => {
				axios.get(`/api/products/${lineItem.product_id}`).then(res => res.data).then(foundProduct => {
					lineItem.product = foundProduct;
					lineItem.subtotal = lineItem.count * foundProduct.unitPrice
				}).catch(err => console.error(err));
			})
			dispatch(loadLineItems(lineItemsArr))
		}
	}
}
