import React from 'react';
import CartItem from './CartItem';
import {Link} from 'react-router';

const Cart = ({ cart }) => {

	const emptyCart = (
		<tr>
			<td className="cart-empty">
				<img src="http://www.inmotionhosting.com/support/images/stories/icons/ecommerce/empty-cart-dark.png"/>
				<h3>Your cart is currently empty</h3>
			</td>
		</tr>
	);

	return (

		<div className="container-fluid">

			<table className="table table-bordered table-responsive">

			  <thead>
			    <tr>
			      <th className="col-md-3 text-center">Item(s)</th>
			      <th className="col-md-2 text-center">Quantity</th>
			      <th className="col-md-2 text-center">Unit Price</th>
			      <th className="col-md-2 text-center">Sub-total</th>
			    </tr>
			  </thead>

			  <tbody>
					{
						Object.keys(cart.items).length > 0 && 
						Object.keys(cart.items).map(key => {
							let item = cart.items[key];
							return <CartItem item={item} key={item.id}/>
						})
						||
						emptyCart
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

			<Link className="btn btn-success btn-checkout" to="/checkout">Checkout</Link>

		</div>

	);

}

import {connect} from 'react-redux';

export default connect (
  ({ cart }) => ({ cart }),
  {},
) (Cart);