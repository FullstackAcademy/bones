import React from 'react';
import Login from './Login'//Why need the extension here????
import WhoAmI from './WhoAmI'
import {connect, Provider} from 'react-redux'
import { Link } from 'react-router';

export const Root = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>{//Whatever child component is clicked will be the children (e.g., anything under root)
  //whatever mapstoprops is will determine what user is logged in!! So figure out how the auth works
    return (
    <div>
      <nav>
        <span>Username (placeholder)</span> |
        <Link to="/signin" activeClassName="active">Orders (placeholder- vis or not)</Link> |
        <Link to="/signin" activeClassName="active">Sign In (placeholder)</Link> |
        <Link to="/logout" activeClassName="active">Logout (placeholder)</Link> |
        <Link to="/cart" activeClassName="active">Cart (placeholder)</Link>
        {/* {user ? <WhoAmI/> : <Login/>} */}
      </nav>
      {children}
    </div>
    )
  }
)
