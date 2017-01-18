import { connect } from 'react-redux';
//import Search from '../components/Search';
import React, { Component } from 'react';
import store from '../Store'
import { searchProduct } from '../action-creators/SearchAC'

export default class SearchContainer extends Component {
	constructor(props) {
		super(props)

		this.state = Object.assign({
			searchQuery: ''
		}, store.getState())

		this.handleSubmit = this.handleSubmit.bind(this)
		//this.handleProductInput = this.handleProductInput.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	// handleProductInput(event) {
	// 	this.setState({searchQuery: event.})
	// }

	handleSubmit(event){
		event.preventDefault()
		//console.log('handleSubmit', this.state)
		
		// this.setState({searchQuery: event.target.value)
		if(this.state.searchQuery){
			store.dispatch(searchProduct(this.state.searchQuery))
		}
	}

	onChange(event){
		event.preventDefault()
		this.setState({searchQuery: event.target.value})
		this.handleSubmit(event)
		//console.log('onChange',event.target.value)
	}

	render(){
		return (
			<li>
				<form onSubmit={this.onSubmit}>
					<div className="input-field">
						<input type='submit' id="search" type="search" value={this.productQuery} onChange={this.onChange} required/>
								<label htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</li>
		)
	}
}