import {SEARCH, NO_SEARCH} from '../constants'
import axios from 'axios';


export const search = input => ({type: SEARCH, input})

export const searchProduct = (input) => {
	return dispatch => {
		axios.get(`api/products`)
		.then(res => res.data)
		.then(products => {
			// console.log(products)
			products.filter(product => {
				let search = Object.values(product)
				for(let i =0; i < search.length; i++){
					//console.log(search[i])
					// if(typeof search[i]==='string') search[i]=search[i].substring(0,input.length)
				

				}



				// console.log('input', input)
				// console.log('search', search)
				//console.log('three', search.includes(input))
				//return (Object.values(product).contains(input))
			})

		})
		.catch(err=>console.error(err))
	}
}
