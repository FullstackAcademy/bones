import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { logout } from '../reducers/auth'


const defaultStyle = {
  marginLeft: 20
}

export default class Navbar extends Component {

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
    <li><a href="#!">Clear Cart</a></li>
    <li><Link to='/checkout'>Checkout</Link></li>
  </ul>
  <ul id="dropdown2" className="dropdown-content">
    <li><Link to='/login'>Log In</Link></li>
    <li><Link to='/myorders'>My Orders</Link></li>
    <li><Link to='/user'>Account Settings</Link></li>
    <li className="divider"></li>
    <li onMouseUp={logout}>Log Out</li>
  </ul>
  <ul id="dropdown3" className="dropdown-content">
    <li><Link to='/catalog/paint'>Paint</Link></li>
    <li><Link to='/catalog/tools'>Tools</Link></li>
    <li><Link to="/catalog/accessories">Accessories</Link></li>
  </ul>

  <nav>
    <div className="nav-wrapper">
      <Link to="/home"><div className="brand-logo"><i className="material-icons">cloud</i>Paint Hopper</div> </Link>
      <ul className="right hide-on-med-and-down">
        <li>
          <form>
            <div className="input-field">
              <input id="search" type="search" required />
              <label htmlFor="search"><i className="material-icons">search</i></label>
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
