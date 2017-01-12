import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class PaintCatalog extends Component {

	render() {

		return (
			<div className='row'>
			  <div className="col s12 m6 l3">
			    <h2 className="header">Horizontal Card</h2>
			    <div className="card horizontal">
			      <div className="card-image">
			        <img src="images/blue-paint.jpg" />
			      </div>
			      <div className="card-stacked">
			        <div className="card-content">
			          <p>Here is some info on this</p>
			        </div>
			        <div className="card-action">
			          <a href="#"><i className="material-icons">add</i></a>
			          <a href="#">This is a link</a>
			        </div>
			      </div>
			    </div>
			  </div>
		  </div>
		)
	}
}