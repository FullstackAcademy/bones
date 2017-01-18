'use strict'
import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory, hashHistory} from 'react-router'
import {connect, Provider} from 'react-redux'

import {reloadSession} from './action-creators/Cart'
import {getProduct, getReviews, loadProducts} from './action-creators/Catalog'


import App from './components/app'
import store from './store'
import Login from './components/Login'
import ThankYou from './components/ThankYou'
import NewUserForm from './components/NewUserForm'
import HomeContainer from './containers/HomeContainer'
import CheckoutContainer from './containers/CheckoutContainer'
import MyOrdersContainer from './containers/MyOrdersContainer'
import CatalogContainer from './containers/catalogContainer'
import ProductDetailsContainer from './containers/ProductDetailsContainer'

import AccountSettingsContainer from './containers/AccountSettingsContainer'
import MyCartContainer from './containers/MyCartContainer'

import axios from 'axios'

const onLoginEnter = function() {}

const onAppEnter = function() {
	store.dispatch(reloadSession())
	store.dispatch(loadProducts())
}

const onProductEnter = function(nextRouterState) {
	const productId = nextRouterState.params.productId
	store.dispatch(getProduct(productId))
	store.dispatch(getReviews(productId))
}


ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={App} onEnter={onAppEnter}>
			<Route path='/home' component={HomeContainer}/>
			<Route path="/thankyou" component={ThankYou}/>
			<Route path="/account" component={AccountSettingsContainer}/>
			<Route path="/login" component={Login}/>
			<Route path="/mycart" component={MyCartContainer}/>
			<Route path="/usersignup" component={NewUserForm}/>
			<Route path='/checkout' component={CheckoutContainer}/>
			<Route path='/myorders' component={MyOrdersContainer}/>
			<Route path ='/catalog/:categoryName' component={CatalogContainer} />
			<Route path="/products/:productId" component={ProductDetailsContainer} onEnter={onProductEnter}/>
			<IndexRedirect to='/home'/>
		</Route>
	</Router>
</Provider>, document.getElementById('main'))
