import React from 'react';

const Login = ({ login, logout }) => (
  <div>
    <form onSubmit={evt => {
      evt.preventDefault();
      login(evt.target.email.value, evt.target.password.value);
    } }>
      <input name="email" />
      <input name="password" type="password" />
      <input type="submit" value="Login" />
    </form>
    <button onClick={evt => {
      evt.preventDefault();
      logout();
    }}>
      Logout
    </button>      
  </div>
)

export default Login;
