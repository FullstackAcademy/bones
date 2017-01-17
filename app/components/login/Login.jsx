import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {GridList} from 'material-ui/GridList';

const style = {
  root: {
    margin: '1vw'
  },
  paper: {
    height: '80vh',
    textAlign: 'center'
  },
  button: {
    margin: '5%'
  }
};

const Login = ({ login, logout, signup }) => (
  <div>
    <GridList style={style.root}>
      <Paper zDepth={1} style={style.paper}>
        <h1>Existing Customers</h1>
        <form onSubmit={evt => {
          evt.preventDefault();
          login(evt.target.email.value, evt.target.password.value);
        } }>
          <TextField name="email" floatingLabelText="e-mail"/><br></br>
          <TextField name="password" type="password" floatingLabelText="Password"/><br></br>
          <RaisedButton type="submit" label="Log In" primary={true} style={style.button}/>
        </form>
        <RaisedButton label="Temporary Logout" secondary={true} onClick={evt => {
          evt.preventDefault();
          logout();
        }}/>
      </Paper>

      <Paper zDepth={1} style={style.paper}>
        <h1>New Customer Sign-Up</h1>
        <form onSubmit={evt => {
            evt.preventDefault();
            signup(evt.target.firstName.value, evt.target.lastName.value, evt.target.email.value, evt.target.password.value );
          }}>
          <TextField name="firstName" floatingLabelText="First Name"/><br></br>
          <TextField name="lastName" floatingLabelText="Last Name"/><br></br>
          <TextField name="email" floatingLabelText="e-mail"/><br></br>
          <TextField name="password" type="password" floatingLabelText="Password"/><br></br>
          <RaisedButton type="submit" label="Sign Up" primary={true} style={style.button}/>
        </form>
      </Paper>
    </GridList>
  </div>
);

export default Login;
