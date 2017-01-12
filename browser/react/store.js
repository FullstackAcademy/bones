import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root-reducer';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
  )
);