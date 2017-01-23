import React from 'react';
import {Link} from 'react-router';

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
          <a className="navbar-brand" href="/">Logo</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/login"><span className="glyphicon glyphicon-user"></span> Login</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}