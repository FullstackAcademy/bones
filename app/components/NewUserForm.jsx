import React, {Component} from 'react'
import { hashHistory, Router, Route, Link } from 'react-router'
import axios from 'axios'
import { login, whoami } from  '../reducers/auth'
import store from '../store'

export default class NewUserForm extends Component {

	constructor(props) {
	super(props);
		this.state = {
			userName: '',
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		};
		this.handleUserNameChange = this.handleUserNameChange.bind(this);
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
}

handleUserNameChange(event) {
	this.setState({userName: event.target.value});
}
handleFirstNameChange(event) {
	this.setState({firstName: event.target.value});
}
handleLastNameChange(event) {
	this.setState({lastName: event.target.value});
}
handleEmailChange(event) {
	this.setState({email: event.target.value});
}
handlePasswordChange(event) {
	this.setState({password: event.target.value});
}

handleSubmit(event) {
	event.preventDefault(event);
	// On submit of the form, send a POST request with the data to the server.
	 return axios.post('/api/users', {
		userName: this.state.userName,
		firstName: this.state.firstName,
		lastName: this.state.lastName,
		email: this.state.email,
		password: this.state.password
	})
	.then(response => store.dispatch(login(response.data.email, response.data.password)))
	.then( () => hashHistory.push('/user'))
// here we need to handle button change to edit once logged in
	.catch(err => console.error(err.stack));
}

	render() {
		return (
			<div>
				<div>
					<h3>New User Form</h3>
				</div>
				<div className="row">
					<form onSubmit={this.handleSubmit} className="col s12">
						<div className="row">
							<div className="input-field col s4">
								<input id="userName" type="text" className="validate"onChange={this.handleUserNameChange} required/>
								<label htmlFor="userName">UserName</label>
							</div>
							<div className="input-field col s4">
								<input id="firstName" type="text" className="validate" onChange={this.handleFirstNameChange}/>
								<label htmlFor="first_name">First Name</label>
							</div>
							<div className="input-field col s4">
								<input id="lastName" type="text" className="validate" onChange={this.handleLastNameChange}/>
								<label htmlFor="last_name">Last Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="password" type="password" className="validate" onChange={this.handlePasswordChange} required/>
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="email" type="email" className="validate" onChange={this.handleEmailChange} required/>
								<label htmlFor="email">Email</label>
							</div>
						</div>
						<button className="btn waves-effect waves-light" type="submit" name="action" onSubmit={this.handleSubmit}>Submit
							<i className="material-icons right"></i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}
