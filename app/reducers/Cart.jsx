import {ADD_TO_SESSION} from '../constants'

export default function (state = {}, action)  {
  const newState = Object.assign({}, state);

	switch(action.type) {


    case ADD_TO_SESSION:
      newState.order = action.session
      break;

		default:
			return state
	}
  // console.log('newState', newState)
	return newState
}
