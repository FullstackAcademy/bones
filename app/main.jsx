'use strict'
import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'

import App from './components/app'

import store from './store'
import Login from './components/Login'
import loginContainer from './containers/loginContainer'
import PaintCatalog from './components/PaintCatalog'


import axios from 'axios'


const onLoginEnter = function() {

}

ReactDOM.render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/login" component={Login} />
        <Route path="/paint" component={PaintCatalog} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
