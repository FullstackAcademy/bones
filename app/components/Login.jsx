import React from 'react'

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export const Login = ({ login }) => (
  <div id="login" className="mdl-grid">
    <form className="mdl-cell mdl-cell--4-col" onSubmit = {evt => {
      evt.preventDefault()
      login(evt.target.email.value, evt.target.password.value)
    } }>
      <TextField
         defaultValue= ""
         name= "email"
         hintText="Email"
      /><br />
         <TextField
           defaultValue= ""
           name= "password"
           type= "password"
           hintText="Password"
         /><br />
         <br />
       <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">Login
       </button>
    </form>
  </div>
)

export default connect (
  state => ({}),
  {login},
) (Login)
