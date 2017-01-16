import { combineReducers } from 'redux'
import CatalogReducer from './Catalog'
import CartReducer from './cart'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  Catalog: CatalogReducer,
  category: {},
  Cart: CartReducer
})

export default rootReducer
