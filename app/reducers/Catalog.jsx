import {RECEIVE_PRODUCTS} from '../constants'

export default function (state = {}, action)  {

  const newState = Object.assign({}, state);

	switch(action.type) {

		case RECEIVE_PRODUCTS:
			newState.products = action.products
			break

		default:
			return state
	}
	return newState
}
