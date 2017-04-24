import axios from 'axios'

const UPDATE_BILLING = 'UPDATE_BILLING'

/* Action Creator */

export const createBill(bill){
	return {
		type: UPDATE_BILLING,
		bill
	}
}

/* Thunks*/
export const createBillingInfo(cardNumber, expDate, ccvNumber, address, city, state, zipCode) {

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
			const action = createBill(Bill)
			dispatch(action)
		})
		.catch(err => {
			console.error(err)
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
			newState.currentBill = action.type
			break
			
		default: 
			return prevState
	}
	return newState
}






