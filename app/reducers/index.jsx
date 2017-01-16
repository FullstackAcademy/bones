import { combineReducers } from 'redux'
import CatalogReducer from './Catalog'
import CartReducer from './cart'
import SessionReducer from './Session'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  Catalog: CatalogReducer,
  category: {},
  Cart: CartReducer,
  Session: SessionReducer
})

export default rootReducer
