import { combineReducers } from 'redux'
import productsReducer from './products-reducer'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: productsReducer,
})

export default rootReducer
