import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import store from '../store';
import Search from '../containers/SearchContainer.jsx';

const defaultStyle = {
	marginLeft: 20
}

export default class Navbar extends Component {
	constructor(props){
		super(props)
		this.state = {searchValue: ''}
		this.onInputChange = this.onInputChange.bind(this);
	}

	componentDidMount() {
		var element = ReactDOM.findDOMNode(this.refs.dropdown)
		$(element).ready(function() {
			$(".dropdown-button").dropdown();
		});
	}

	onInputChange(event){
		event.preventDefault()
		// console.log(event.target.value)
		// this.setState({searchValue: ''})
	}

	render() {
		return (
			<div>
				<ul id="dropdown1" className="dropdown-content">
					<li>
						<Link to='/mycart'>My Cart</Link>
					</li>
					<li> <a onClick = {() => this.props.dumpCartItems(this.props.order.id)
                        }>Clear Cart</a>
					</li>
					<li>
						<Link to='/checkout'>Checkout</Link>
					</li>
				</ul>
				{this.props.auth
					? <ul id="dropdown2" className="dropdown-content">
							<li>
								<Link to='/myorders'>My Orders</Link>
							</li>
							<li>
								<Link to='/account'>Account</Link>
							</li>
							<li className="divider"></li>
							<li> <a onClick={this.props.onLogout}>Log Out</a></li>
						</ul>
					: <ul id="dropdown2" className="dropdown-content">
						<li>
							<Link to='/login'>Log In</Link>
						</li>
					</ul>}
				<ul id="dropdown3" className="dropdown-content">
					<li>
						<Link to='/catalog/paint'>Paint</Link>
					</li>
					<li>
						<Link to='/catalog/tools'>Tools</Link>
					</li>
					<li>
						<Link to="/catalog/accessories">Accessories</Link>
					</li>
				</ul>
				<nav>
					<div className="nav-wrapper">
						<Link to="/home">
							<div className="brand-logo">
								<i className="material-icons">format_paint</i>PaintHopper</div>
						</Link>
						<ul className="right hide-on-med-and-down">
			
								<Search />
							
							<li>
								<a className='dropdown-button' href='#' data-activates='dropdown1'>
									<i className="material-icons">shopping_cart</i>
								</a>
							</li>
							<li>
								<a className='dropdown-button' href='#' data-activates='dropdown2'>
									<i className="material-icons">account_box</i>
								</a>
							</li>
							<li>
								<a className="dropdown-button" href="#!" data-activates="dropdown3">Shop<i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
