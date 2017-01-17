import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';
import LOGOUT_USER from './reducers/auth'

import {whoami} from './reducers/auth';

const engine = createEngine('reduxEngine');
const reducer = storage.reducer(rootReducer);
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(createLogger(),
thunkMiddleware, middleware)(createStore);

const store = createStoreWithMiddleware(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const load = storage.createLoader(engine, [LOGOUT_USER]);
load(store)
.then((newState) => console.log('Loaded state:', newState))
.catch(() => console.log('Failed to load previous state'));

export default store;

// Set the auth info at start
store.dispatch(whoami());
