import { search } from '../action-creators/SearchAC';
import { SEARCH } from '../constants'
import { hashHistory, Router } from 'react-router'

export default function({state = {} , action}) => {
	const newState = Object.assign({}, state)

	switch(action.type) {
		case SEARCH:
			newState.input = action.input
			break;
		default: return state;
	}
	return newState
}