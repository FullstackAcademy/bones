import axios from 'axios'

const UPDATE_BILLING = 'UPDATE_BILLING'

/* Action Creator */


export function createBill(bill){
	return {
		type: UPDATE_BILLING,
		bill
	}
}

/* Thunks*/

export function createBillingInfo(cardNumber, expDate, ccvNumber, address, city, state, zipCode) {

	return function (dispatch) {
		return axios.post('/api/billing', {
			cardNumber: cardNumber,
			expDate: expDate,
			ccvNumber: ccvNumber,
			address: address,
			city: city,
			state: state,
			zipCode: zipCode
		})
		.then(res => res.data)
		.then(Bill => {
			dispatch(createBill(Bill))
		})
		.catch(err => {
			console.error(err) //can we use a more generalized logger?
		})
	}
}

/* Reducer */
let initialState = {
	currentBill: {}
}


export function createBillReducer (prevState=initialState, action) {

	const newState = Object.assign({}, prevState)

	switch(action.type) {

		case UPDATE_BILLING:
			newState.currentBill = action.bill
			break

		default:

			return prevState
	}
	return newState
}
