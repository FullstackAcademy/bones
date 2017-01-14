'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import axios from 'axios';

import store from './store'

import App from './components/App'
import Homepage from './components/Homepage'

import ProductsContainer from './containers/ProductsContainer'

import {getProductsByTag} from './action-creators/products'


const onProductsContainerEnter = function (nextRouterState) {
  const tag = nextRouterState.params.tag;
  store.dispatch(getProductsByTag(tag));
};


export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/home" component={Homepage} />
          <Route path="/products/:tag" component={ProductsContainer} onEnter={onProductsContainerEnter} />
          <IndexRedirect to="/home"/>
        </Route>
      </Router>
    </Provider>
  )
}
