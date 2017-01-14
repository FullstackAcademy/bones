import React from 'react'
import User from '../components/User'
import {connect} from 'react-redux'

// container to wrap User form for access to state (auth)
const mapStateToProps = (state) => state;

export default connect(
	mapStateToProps, {})(User)
