import {CREATE_ORDER} from '../constants'

export default function (state = {}, action)  {
  const newState = Object.assign({}, state);

	switch(action.type) {

		case CREATE_ORDER:
			{
        newState.order = action.addedOrder


      }
			break

		default:
			return state
	}
  // console.log('newState', newState)
	return newState
}
