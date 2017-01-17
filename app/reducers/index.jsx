import { combineReducers } from 'redux';
import rocksReducer from './rocks';
import rockReducer from './rock';
import userInfoReducer from './userInfoReducer';
import cartReducer from './cart';
import authReducer from './auth';
import adminReducer from './admin';
import itemQuantityReducer from './itemQuantityReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  rocks: rocksReducer,
  userInfo: userInfoReducer,
  rock: rockReducer,
  cartProducts: cartReducer,
  users: adminReducer,
  itemQuantity: itemQuantityReducer
});

export default rootReducer;
