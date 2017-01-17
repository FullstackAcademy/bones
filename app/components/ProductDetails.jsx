import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import store from '../store'

export default function (props) {

	const product = props.Catalog.product

	return (
		<div>
		{console.log(props)}
			{
			props.Catalog.product ?
	  	<div className="col s12 m6 l3 card-panel hoverable" key={product.id}>
		    <h5 className="header">{product.title}</h5>
		    <div className="card horizontal">
		      <div className="card-image">
		        <img src={product.photoUrl} />
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		          <p>{product.description}</p>
		        </div>
		        <div className="card-action cart-text" onClick={()=> {props.addToCart(props.auth.id, props.Session.order, product.id)}} >
		          Add<i className="material-icons">shopping_cart</i>{product.unitPrice}
		        </div>
		      </div>
		    </div>
		  </div>
		  :
		  <div></div>
		}
		</div>
	)

}


		// <div>
			
	 //  	<div className="col s12 m6 l3 card-panel hoverable" key={product.id}>
		//     <h5 className="header">{product.title}</h5>
		//     <div className="card horizontal">
		//       <div className="card-image">
		//         <img src={product.photoUrl} />
		//       </div>
		//       <div className="card-stacked">
		//         <div className="card-content">
		//           <p>{product.description}</p>
		//         </div>
		//         <div className="card-action cart-text" onClick={()=> {props.addToCart(props.auth.id, props.Session.order, product.id)}} >
		//           Add<i className="material-icons">shopping_cart</i>{product.unitPrice}
		//         </div>
		//       </div>
		//     </div>
		//   </div>
		
		// </div>
