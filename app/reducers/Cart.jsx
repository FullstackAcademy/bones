import {CREATE_ORDER, LOAD_CART} from '../constants'

export default function (state = {}, action)  {
  const newState = Object.assign({}, state);

	switch(action.type) {

		case CREATE_ORDER:
        newState.order = action.addedOrder
			break

    case LOAD_CART:
      newState.order = action.loadedOrder
      break

		default:
			return state
	}
  // console.log('newState', newState)
	return newState
}
