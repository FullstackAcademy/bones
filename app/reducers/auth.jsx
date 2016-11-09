import axios from 'axios'

import store from '../store'
import {updateCartId} from './cart'

import { browserHistory } from 'react-router'
import {clearOrders} from 'APP/app/reducers/orders'


const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      {username, password})
      .then(() => {
        browserHistory.push('/')
        return dispatch(whoami())})
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => {
        dispatch(clearOrders())
        dispatch(whoami())})
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        return dispatch(authenticated(user))
      })
      .then(res =>{
        console.log("RES",res);
        return axios.get(`/api/orders/users/${res.user.id}/not%20submitted`)
      }
      )
      .then(res=> {console.log("get res", res); if(res){console.log("data1", res.data); return axios.get(`/api/orders/ordersproducts/${res.data[0].id}`)}})
      .then(res=>{
         if(res && res.data.length !== 0){
          console.log("data", res.data);
          dispatch(updateCartId({user_id:res.data[0].user_id, order_id:res.data[0].id, products:res.data[0].products}))
         }
      })
      .catch(failed => console.log(failed))

// export const getcart =  user=>
//   dispatch =>
//     axios.get(`/api/orders/users/${user.id}/not%20submitted`)
//     .then((orders)=>{
//       console.log("ordres",ordres);
//       dispatch(updateCartId(orders))
//     })

export default reducer
