import React from 'react';

const Login = ({ login, logout, signup }) => (
  <div>
    <br></br>
    <h1>Sign-In</h1>
    <form onSubmit={evt => {
      evt.preventDefault();
      login(evt.target.email.value, evt.target.password.value);
    } }>
      <input name="email" placeholder="e-mail"/>
      <input name="password" type="password" placeholder="Password"/>
      <input type="submit" value="Login" />
    </form>
    <button onClick={evt => {
      evt.preventDefault();
      logout();
    }}>
      Logout
    </button>

    <hr></hr>

    <h1>Sign-Up</h1>
    <form onSubmit={evt => {
        evt.preventDefault();
        signup(evt.target.firstName.value, evt.target.lastName.value, evt.target.email.value, evt.target.password.value )
      }}>
      First Name: <input name="firstName" placeholder="First Name"/><br></br>
      Last Name: <input name="lastName" placeholder="Last Name"/><br></br>
      Email: <input name="email" placeholder="e-mail"/><br></br>
    Password: <input name="password" type="password" placeholder="Password"/><br></br>
      <input type="submit" value="Sign Up!" />
    </form>
  </div>
)

export default Login;
