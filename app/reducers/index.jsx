import { combineReducers } from 'redux'
import CatalogReducer from './Catalog'
import Session from './Cart'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  Catalog: CatalogReducer,
  category: {},
  Session: Session,
})

export default rootReducer
