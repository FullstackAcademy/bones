import { combineReducers } from 'redux'
import CatalogReducer from './Catalog'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  Catalog: CatalogReducer
})

export default rootReducer
