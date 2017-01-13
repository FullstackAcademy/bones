'use strict'
import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory, hashHistory} from 'react-router'
import {connect, Provider} from 'react-redux'

import {loadProducts} from './action-creators/paintCatalog'

import App from './components/app'

import store from './store'
import Login from './components/Login'
import PaintCatalogContainer from './containers/PaintCatalogContainer'
import HomeContainer from './containers/HomeContainer'
import ToolsContainer from './containers/ToolsContainer'
import AccessoriesContainer from './containers/AccessoriesContainer'
import CheckoutContainer from './containers/CheckoutContainer'
import MyOrdersContainer from './containers/MyOrdersContainer'


import axios from 'axios'

const onLoginEnter = function() {

}

const onPaintCatalogEnter = function() {
  store.dispatch(loadProducts())
}

ReactDOM.render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
      	<Route path ='/home' component={HomeContainer} />
        <Route path="/login" component={Login} />
        <Route path="/paint" component={PaintCatalogContainer} onEnter={onPaintCatalogEnter}/>
        <Route path='/tools' component={ToolsContainer} />
        <Route path ='/accessories' component={AccessoriesContainer} />
        <Route path ='/checkout' component={CheckoutContainer} />
        <Route path ='/myorders' component={MyOrdersContainer} />
       <IndexRedirect to='/home' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
