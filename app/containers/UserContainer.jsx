import React from 'react'
//import User from '../components/User'
//import Login from '../components/Login'
import {connect} from 'react-redux'

// refactor to be smart container to wrap User form for access to state (auth)
const mapStateToProps = (state) => state;

export default connect(
	mapStateToProps, {})()
