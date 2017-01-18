import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import store from '../store'
import StarRating from 'react-star-rating';

export default function (props) {

	const product = props.Catalog.product
	const reviews = props.Catalog.reviews
	
	return (
		<div>
			{
			props.Catalog.product ?
			<div>
	  	<div className="card-panel hoverable" key={product.id}>
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
		  	<div className='card-panel hoverable reviews'>
		    	<h3 className='ReviewTitle'>Reviews</h3>

		    	{
		    		reviews && reviews.map(review => {
		    			if(product.id === review.product_id)
							return (
					       <div key={review.id}>
						       <div>
						      		<h6 className='title'>{review.title}</h6>
						       </div>

					       <div>
					        <p className='RevContent'>{review.content}</p>
					        <div></div>
					        <p className='RevContent'>Rating: <StarRating rating={review.numStars} size={25}/></p>
					        	<br/>
					        	<br/>
					        	<br/>
					        	<br/>

					       </div>

						       <br/>
						       <br/>
						       <br/>
						       <br/>

					       </div>
							)		    			
		    			    		
		    		})
		    }
	    		
					</div>
					</div>

		  :
		  <div></div>
		}


		</div>
	)

}
