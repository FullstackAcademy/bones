const initialState = {
	items: {
		1: {
			id: 1,
			name: 'BLAHBLAH',
			quantity: 1,
			price: 349.99,
			photoUrl: 'http://i2.kym-cdn.com/entries/icons/facebook/000/013/564/aP2dv.jpg'
		}
	},
	subTotal: 349.99
};

import axios from 'axios';

const reducer = (state = initialState, action) => {
	let newState = Object.assign({}, state);
	switch(action.type) {

		case ADD_ITEM:
			let id = action.item.id;
			if (newState.items[id]) newState.items[id] = {
				...newState.items[id],
				quantity: newState.items[id].quantity + 1
			}
			else newState.items[id] = action.item;
			newState.subTotal += newState.items[id].price;
			break;

		case REMOVE_ITEM:
			let item = newState.items[action.id];
			newState.subTotal -= item.price * item.quantity;
			delete newState.items[action.id];
			break;

		case UPDATE_QUANTITY:
			let difference =  action.quantity - newState.items[action.id].quantity;
			newState.items[action.id] = {
				...newState.items[action.id],
				quantity: action.quantity
			}
			newState.subTotal += newState.items[action.id].price * difference;
			break;

	};
	return newState;
};

const ADD_ITEM = 'ADD_ITEM';
export const addItem = item => ({
	type: ADD_ITEM,
	item
});

const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItem = id => ({
	type: REMOVE_ITEM,
	id
});

const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const updateQuantity = (id, quantity) => ({
	type: UPDATE_QUANTITY,
	id,
	quantity
});

const PLACE_ORDER = 'PLACE_ORDER';
export const placeOrder = (order) => {
  return dispatch => {
    axios.post('/api/orders', order)
    	.then(res => res.data)
  };
};

export const testOrderRoute = () => {
	return dispatch => {
		axios.post('/api/orders', {
			address: '123 Sesame St.',
			email: 'amroms@gmail.com',
			items: [{id: 3, quantity: 1}, {id: 5, quantity: 2}]
		})
		.then(console.log, console.error);
	}
}

export default reducer;