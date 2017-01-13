import { combineReducers } from 'redux'
import paintCatalogReducer from './paintCatalog'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  paintCatalog: paintCatalogReducer
})

export default rootReducer
