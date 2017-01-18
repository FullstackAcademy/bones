import { connect } from 'react-redux';
import Search from '../components/Search';
import { React, Component } from 'react';
import store from '../Store'
import { searchProduct } from '../action-creators/SearchAC'

export default class SearchContainer extends Component {
	constructor(props) {
		super(props)

		this.state = Object.assign({
			productQuery: ''
		}, store.getState())

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleProductInput = this.handleProductInput.bind(this)
	}

	handleProductInput(product) {
		this.setState({productQuery: product})
	}

	handleSubmit(event){
		event.preventDefault()
		if(this.state.productQuery){
			store.dispatch(searchProduct(this.state.productQuery))
		}
	}

	render(){
		return(
			<Search handleSubmit={this.handleSubmit} />
		)
	}
}