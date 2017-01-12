import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class PaintCatalog extends Component {

	render() {

		return (
		  <div className="s12 m6 l3">
		    <h2 className="header">Horizontal Card</h2>
		    <div className="card horizontal">
		      <div className="card-image">
		        <img src="http://lorempixel.com/100/190/nature/6" />
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		          <p>Here is some info on this paint</p>
		        </div>
		        <div className="card-action">
		          <a href="#">This is a link</a>
		        </div>
		      </div>
		    </div>
		  </div>
		)
	}
}