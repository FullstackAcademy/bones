import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class PaintCatalog extends Component {

	render() {

		return (
			<div>
				<h3 className="center-align">Paint Catalog</h3>
				<div className='row'>
					{
					this.props.Catalog.products && this.props.Catalog.products.map(product => {
						if(product.category === "paint")
							return (
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
							        <div className="card-action cart-text">
							          <a href="#">Add<i className="material-icons">shopping_cart</i>{product.unitPrice}</a>
							        </div>
							      </div>
							    </div>
							  </div>
							)

						})
					}
			  </div>
		  </div>
		)
	}
}
