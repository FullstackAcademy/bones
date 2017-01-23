'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store';
import {fetchSingleProduct} from './reducers/singleProduct';

import Layout from './components/Layout';
import Cart from './components/Cart'
import Products from './containers/ProductsContainer';
import Checkout from './components/Checkout';
import Login from './components/Login';
import SingleProductContainer from './containers/SingleProductContainer';

import { getCategories } from './reducers/categories';
import { getProducts, getProductFromId } from './action-creators/products';

const onEnter = () => {
  store.dispatch(getCategories());
};

const onProductsEnter = () => {
  store.dispatch(getProducts());
}

const onSingleProductEnter = (nextState) => {
  const productId = nextState.params.productId;
  store.dispatch(fetchSingleProduct(productId));
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout} onEnter={onEnter}>
        <Route path="/login" component={Login}/>
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={Products} onEnter={onProductsEnter}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/products" component={Products}/>
        <Route path="products/:productId" component={SingleProductContainer} onEnter={onSingleProductEnter}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)