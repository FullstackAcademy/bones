import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from '../store';

export default function(props){
	const handleSubmit = props.handleSubmit
	const productQuery = props.productQuery
	const productChange = function(event){
		props.setProduct(event.target.value)
	}
	return(
		<form onSubmit={this.handleSubmit}>
			<div className="input-field">

				<input id="search" type="search" value={productQuery} onChange={productChange} required/>
						<label htmlFor="search">
					<i className="material-icons">search</i>
				</label>
				<i className="material-icons">close</i>
			</div>
		</form>
	)
}