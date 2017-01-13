import { combineReducers } from 'redux';
import rocksReducer from './rocks';
import rockReducer from './rock';
import userInfoReducer from './userInfoReducer';
import loginUserReducer from './login';
import cartReducer from './cart';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  rocks: rocksReducer,
  userInfo: userInfoReducer,
  rock: rockReducer,
  cartProducts: cartReducer,
  loggedInUser: loginUserReducer
});

export default rootReducer;
