import { combineReducers } from 'redux'
import { recCatReducer, recProdReducer } from './receive'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: recProdReducer,
  categories: recCatReducer,
})

export default rootReducer
