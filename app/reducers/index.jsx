import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default,
  user: require('./user').default,
  cart: require('./cart').default,
  currentProduct: require('./product').default,
  orders: require('./orders').default,
  celebs: require('./celeb').default,
  currentCeleb: require('./celebProducts').default
})

export default rootReducer
