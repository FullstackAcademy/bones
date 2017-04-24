import { combineReducers } from 'redux'
import { recCatReducer, recProdReducer } from './receive'
import { userReducer } from './users'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: recProdReducer,
  categories: recCatReducer,
  users: userReducer,
})

export default rootReducer
