import {ADD_TO_SESSION, CREATE_LINE_ITEMS} from '../constants'

export default function (state = {}, action)  {
  const newState = Object.assign({}, state);

	switch(action.type) {


    case ADD_TO_SESSION:
		newState.order = action.session
		break;
	case CREATE_LINE_ITEMS:
		newState.lineItems = action.lineItems
		break;
	default:
		return state
	}
	return newState
}
