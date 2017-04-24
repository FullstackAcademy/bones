'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios';

import store from './store'
import { Root } from './components/Root.jsx'
import { receiveCategoriesAC, receiveProductsAC } from './reducers/receive.jsx'
import Categories from './components/Categories.jsx'
import NotFound from './components/NotFound'

const onRootEnter = function () {

  Promise.all([
    axios.get('/api/categories'),
    axios.get('/api/products'),
  ])
    .then(responses => responses.map(r => r.data))
    .then(([categories, products]) => {
      store.dispatch(receiveCategoriesAC(categories));
      store.dispatch(receiveProductsAC(products));
    });

};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} onEnter={onRootEnter}>
        <IndexRedirect to="/categories" />
        <Route path="/categories" component={Categories} />
        {/* <Route path="/products" component={Products}/>
        <Route path="/item" component={Item}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/cart" component={Checkout}/> */}
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
