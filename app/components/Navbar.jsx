import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';


const defaultStyle = {
  marginLeft: 20
}

export default class Header extends Component {

  componentDidMount() {
    var element = ReactDOM.findDOMNode(this.refs.dropdown)

    $(element).ready(function() {
      $(".dropdown-button").dropdown();
    });
  }

	render() {
		return (
<div>
  <ul id="dropdown1" className="dropdown-content">
    <li><a href="#!">View Cart</a></li>
    <li><a href="#!">Clear Cart</a></li>
    <li><a href="#!">Checkout</a></li>
  </ul>
  <ul id="dropdown2" className="dropdown-content">
    <li><a href="#!">Log In</a></li>
    <li><a href="#!">Account Settings</a></li>
    <li className="divider"></li>
    <li><a href="#!">Log Out</a></li>
  </ul>
  <ul id="dropdown3" className="dropdown-content">
    <li><a href="#!">Paint</a></li>
    <li><a href="#!">Tools</a></li>
    <li><a href="#!">Accessories</a></li>
  </ul>

  <nav>
    <div className="nav-wrapper light-blue darken-2">
      <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Paint Hopper</a>
      <ul className="right hide-on-med-and-down light-blue darken-2">
        <li>      
          <form>
            <div className="input-field">
              <input id="search" type="search" required />
              <label for="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </li>
        <li><a className='dropdown-button' href='#' data-activates='dropdown1'><i className="material-icons">shopping_cart</i></a></li>
        <li><a className='dropdown-button' href='#' data-activates='dropdown2'><i className="material-icons">account_box</i></a></li>
        <li><a className="dropdown-button" href="#!" data-activates="dropdown3">Shop<i className="material-icons right">arrow_drop_down</i></a></li>
      </ul>
    </div>
  </nav>
</div>
		)
	}
}