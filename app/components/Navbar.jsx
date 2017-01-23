import React from 'react';
import {Link} from 'react-router';
import CategoriesMenu from './CategoriesMenu';

export default () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>                        
          </button>
          <Link className="navbar-brand" to="/">Logo</Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="#">Home</Link></li>
            <CategoriesMenu/>
            <li><Link to="#">Products</Link></li>
            <li><Link to="#">Deals</Link></li>
            <li><Link to="#">Stores</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login"><span className="glyphicon glyphicon-user"></span> Login</Link></li>
            <li><Link to="/cart"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}