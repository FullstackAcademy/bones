import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class Tools extends Component {

	render() {

		return (
			<div>
				<h3 className="center-align">Tools Catalog</h3>
				<div className='row'>
				  <div className="col s12 m6 l3 card-panel hoverable">
				    <h5 className="header">Horizontal Card</h5>
				    <div className="card horizontal">
				      <div className="card-image">
				        <img src="images/toolbox.png" />
				      </div>
				      <div className="card-stacked">
				        <div className="card-content">
				          <p>Here is some info on this</p>
				        </div>
				        <div className="card-action cart-text">
				          <a href="#">Add<i className="material-icons">shopping_cart</i></a>
				        </div>
				      </div>
				    </div>
				  </div>
			  </div>
		  </div>
		)
	}
}