// import {ADD_TO_SESSION} from '../constants'
// import axios from 'axios'
//
// const setSession = function(session) {
// 	return {
// 		type: ADD_TO_SESSION,
// 		session
// 	}
// }
//
// export const loadSession = function() {
// 	return function(dispatch, getState) {
// 		axios.get('/api/orders/isOrder')
// 			.then(res => res.data)
// 			.then(session => {
// 				if (!session.passport && session.order){
//          dispatch(setSession(session.order))
//        }
// 			})
// 			.catch(err => console.error(err))
// 	}
// }
