import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT, RECEIVE_REVIEWS} from '../constants'

export default function (state = {}, action)  {

  const newState = Object.assign({}, state);

	switch(action.type) {

		case RECEIVE_PRODUCTS:
			newState.products = action.products
			break

		case RECEIVE_PRODUCT:
			newState.product = action.product
			break

		case RECEIVE_REVIEWS:
			newState.reviews = action.reviews
			break
			
		default:
			return state
	}
	return newState
}
