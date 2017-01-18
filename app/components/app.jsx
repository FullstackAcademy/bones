import React, {Component} from 'react'
import NavBarContainer from '../containers/navbarContainer'
import Home from '../components/Home'
export default class App extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		$(document).ready(function() {
			$('.parallax').parallax();
		})
	}
	render() {
		return (
			<div id="main">
				<NavBarContainer/>
				<div>
					{this.props.children}
				</div>
				{/* Include a container */}
			</div>
		)
	}
}
