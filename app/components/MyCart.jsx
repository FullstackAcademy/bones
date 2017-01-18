import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';


export default class MyCart extends Component{
	constructor(props){
		super(props)
	}

render() {
console.log('cart', this.props.cart)
const lineItems = this.props.cart ? this.props.cart.lineItems : [];
console.log('lineItems', lineItems)
if (lineItems.length) lineItems.sort(function(a,b){
	return a.id - b.id
})

		return (
			<div>
				<h3>My Cart</h3>
				<br/>
				<Link to='/checkout' className="waves-effect waves-light btn-large"><i className="material-icons left">attach_money</i>Checkout</Link>
				<ul className="collection">
				{
					lineItems.length && lineItems.map( (lineItem, index) =>  (
							<li key={index} className="collection-item avatar">
							  <Link to={`products/${lineItem.product.id}`}><i className="material-icons circle">folder</i></Link>
							  <span className="title">{lineItem.product.title}</span><br/>
							  <p><br/>
								Unit Price: {lineItem.product.unitPrice}, Quantity: {lineItem.count}, SubTotal: ${(lineItem.product.unitPrice * lineItem.count).toFixed(2)}
							  </p>

							  <div className="secondary-content"><i className="material-icons" onClick={()=> {this.props.addToCart(this.props.state.auth.id, this.props.state.Session.order, lineItem.product.id)}}>exposure_plus_1</i>
								<i onClick={ () => this.props.deleteFromCart(lineItem.id)} className="material-icons">remove_shopping_cart</i></div>
							</li>
						)
					)
				}
			    </ul>


		  </div>
		)
	}

}
