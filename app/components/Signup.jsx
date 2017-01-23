import React from 'react'

export const Signup = ({ signup }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    signup(evt.target.username.value, evt.target.password.value)
  } }>
    <input name="username" />
    <input name="password" type="password" />
    <input type="submit" value="signup" />
  </form>
)

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {signup},
) (Signup)
