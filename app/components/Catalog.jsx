import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import store from '../store'

 export default class Catalog extends React.Component {
constructor(props){
	super(props)
	this.handleAddCart = this.handleAddCart.bind(this)
}

handleAddCart(userId, order, productId){
	store.dispatch(this.props.addToCart(userId, order, productId))
}


render(){
		return (
			<div>
        {
        //  console.log('this.props', this.props)
        }
				<h3 className="center-align">{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Catalog</h3>
				<div className='row'>
					{
					this.props.Catalog.products && this.props.Catalog.products.map(product => {
						if(product.category === this.props.category)
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
							        <div className="card-action cart-text" onClick={()=> {this.handleAddCart(this.props.auth.id, this.props.Session.order, product.id)}} >
							          Add<i className="material-icons">shopping_cart</i>{product.unitPrice}
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

//onClick={this.handleAddCart(product.id)}
