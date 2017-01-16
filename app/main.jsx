'use strict'
import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory, hashHistory} from 'react-router'
import {connect, Provider} from 'react-redux'

import {loadProducts} from './action-creators/Catalog'
import {loadSession} from './action-creators/LoadSession'


import App from './components/app'
import store from './store'
import Login from './components/Login'
import NewUserForm from './components/NewUserForm'

import UserContainer from './containers/UserContainer'
import HomeContainer from './containers/HomeContainer'
import CheckoutContainer from './containers/CheckoutContainer'
import MyOrdersContainer from './containers/MyOrdersContainer'
import CatalogContainer from './containers/catalogContainer'

import axios from 'axios'

const onLoginEnter = function() {}
const onAppEnter = function() {
	store.dispatch(loadProducts())
	store.dispatch(loadSession())

}

ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={App} onEnter={onAppEnter}>
			<Route path='/home' component={HomeContainer}/>
			<Route path="/user" component={UserContainer}/>
			<Route path="/login" component={Login}/>
			<Route path="/usersignup" component={NewUserForm}/>
			<Route path='/checkout' component={CheckoutContainer}/>
			<Route path='/myorders' component={MyOrdersContainer}/>
			<Route path ='/catalog/:categoryName' component={CatalogContainer} />
			<IndexRedirect to='/home'/>
		</Route>
	</Router>
</Provider>, document.getElementById('main'))
