import {SEARCH, NO_SEARCH} from '../constants'



export const search = input => ({type: SEARCH, input})

export const searchProduct = (input) => {
	return dispatch => {
		axios.get(`api/products`)
	}
}
