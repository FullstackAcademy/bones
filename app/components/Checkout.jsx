import React, {Component} from 'react';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';

class Checkout extends Component{
	constructor(props) {
		super(props);
		this.state = {}
		this.getFullAddress = this.getFullAddress.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getFullAddress() {
		const keys = ['name', 'street', 'city', 'state', 'country'];
		let fullAddress = keys.map(key => {
			this.state[key];
		})
		return keys.join(' ');
	}

	handleChange(key, val) {
		this.setState({
			[key]: val
		})
	}

	handleSubmit() {
		let address = this.getFullAddress();
		let email = this.state.email;
		let items = this.props.cart.items;
		const order = {
			address,
			email,
			items
		}
		this.props.placeOrder(order);
	}

	render() {

		const cart = this.props.cart;

		return (

			<div className="container-fluid">

				<CheckoutForm handleChange={this.handleChange}/>

				<table className="table table-bordered table-responsive">

				  <thead>
				    <tr>
				      <th className="col-md-4 text-center">Item(s)</th>
				      <th className="col-md-2 text-center">Quantity</th>
				      <th className="col-md-2 text-center">Unit Price</th>
				      <th className="col-md-2 text-center">Sub-total</th>
				    </tr>
				  </thead>

				  <tbody>
						{
							Object.keys(cart.items).map(key => {
								let item = cart.items[key];
								return <CartItem item={item} key={item.id}/>
							})
						}
				  </tbody>

				</table>

				<table className="table table-bordered cart-side-table">

					<tbody>
						<tr>
							<th className="col-md-4">Sub-total</th>
							<td className="col-md-2">{cart.subTotal}</td>
						</tr>
						<tr>
							<th className="col-md-4">Tax</th>
							<td className="col-md-2">{cart.subTotal * 0.07}</td>
						</tr>
						<tr>
							<th className="col-md-4">Total</th>
							<td className="col-md-2">{cart.subTotal * 1.07}</td>
						</tr>
						
					</tbody>

				</table>

				<button className="btn btn-success btn-checkout" onClick={this.handleSubmit}>Place Order</button>

			</div>

		);
	}

};

import {connect} from 'react-redux';
import {placeOrder} from '../reducers/cart'

const mapDispatchToProps = (dispatch) => {
	return {
		placeOrder: (order) => {
			dispatch(placeOrder(order));
		}
	}
}

export default connect (
  ({ cart }) => ({ cart }),
  mapDispatchToProps
) (Checkout);