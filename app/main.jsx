'use strict'
import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory, hashHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import {loadProducts} from './action-creators/Catalog'
import App from './components/app'
import store from './store'
import Login from './components/Login'
import NewUserForm from './components/NewUserForm'
import PaintCatalogContainer from './containers/PaintCatalogContainer'
import HomeContainer from './containers/HomeContainer'
import CheckoutContainer from './containers/CheckoutContainer'
import MyOrdersContainer from './containers/MyOrdersContainer'
import CatalogContainer from './containers/catalogContainer'
import AccountSettingsContainer from './containers/AccountSettingsContainer'

import axios from 'axios'

const onLoginEnter = function() {}
const onAppEnter = function() {
	store.dispatch(loadProducts())
}

ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={App} onEnter={onAppEnter}>
			<Route path='/home' component={HomeContainer}/>
			<Route path="/account" component={ AccountSettingsContainer }/>
			<Route path="/login" component={Login}/>
			<Route path="/usersignup" component={NewUserForm}/>
			<Route path='/checkout' component={CheckoutContainer}/>
			<Route path='/myorders' component={MyOrdersContainer}/>
			<Route path ='/catalog/:categoryName' component={CatalogContainer} />
			<IndexRedirect to='/home'/>
		</Route>
	</Router>
</Provider>, document.getElementById('main'))
