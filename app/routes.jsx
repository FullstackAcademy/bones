'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'

import store from './store'

import App from './components/App'
import Homepage from './components/Homepage'
import SingleProduct from './components/Product'
import MultipleProducts from './components/Products'

export default () => {
  console.log(App)

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="homepage" component={Homepage} />
          <Route path="products" component={Products} />
          <Route path="product" component={Product} />
          <IndexRedirect to="homepage"/>
        </Route>
      </Router>
    </Provider>
  )
}
