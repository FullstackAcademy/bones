import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import persistState from 'redux-localstorage'

import {whoami} from './reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware), persistState('cart')
  ));

export default store;

// Set the auth info at start
store.dispatch(whoami());