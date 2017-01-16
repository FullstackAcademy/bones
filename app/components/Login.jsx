import React from 'react'
import {login} from '../reducers/auth'

import {connect} from 'react-redux'
import { Link } from 'react-router'

export const Login = ({ login }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <input name="username" placeholder='email'/>
    <input name="password" type="password" placeholder="password"/>
<div className="btnGroup">
    <input type="submit" value="Login" className= "btn waves-effect waves-light ourBtn"/>
	<button className="btn waves-effect waves-light" type="submit" name="signup"><Link to='/usersignup' className= "ourBtn">SignUp</Link>
	  </button>
</div>
  </form>
);


export default connect (
  state => ({}),
  { login }
) (Login)
