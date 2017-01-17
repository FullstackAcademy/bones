import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';


export default function Cart(props){

let lineItems = props.cart.lineItems ? props.cart : ''

console.log('LINEITEMS', lineItems)


		return (
			<div>
				{console.log('props:', props)}
				<h2>Checkout Page</h2>
				<ul className="collection">
			      <li className="collection-item avatar">
			        <i className="material-icons circle">folder</i>
			        <span className="title">Title</span>
			        <p>First Line <br/>
			           Second Line
			        </p>
			        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
			      </li>

			    </ul>

		  </div>
		)
}
