import React from 'react';
import Login from './Login'//Why need the extension here????
import WhoAmI from './WhoAmI'
import {connect, Provider} from 'react-redux'
import { Link } from 'react-router';

//No longer in use??? Delete???

// import React from 'react';
// import Navbar from './Navbar.jsx';
// // import Footer from './Footer';
//
// const Root = ({ children }) => {
//   console.log(children)
//   return (
//   <div id="main" className="container-fluid">
//     <Navbar />
//     { children }
//     {/* <Footer /> */}
//   </div>
// )
// }
//
//
// export default Root;

export const Root = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>{//Whatever child component is clicked will be the children (e.g., anything under root)
  //whatever mapstoprops is will determine what user is logged in!! So figure out how the auth works
    return (
    <div>
      <nav>
        <span>USERNAME PLACEHOLDER</span>
        <span>ORDERS PLACEHOLDER (VISIBLE OR NOT DEPENDS ON IF USER IS LOGGED IN)</span>
        <Link to="/signin" activeClassName="active">Sign In (placeholder)</Link>
        <Link to="/logout" activeClassName="active">Logout (placeholder)</Link>
        <Link to="/cart" activeClassName="active">Cart (placeholder)</Link>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
    )
  }
)
