// this is the account details page
import React from 'react';

export default class User extends React.Component {
	constructor(props) {
		super(props)
		console.log('this.props:', this.props)
	}
    render() {

		const userName = this.props.auth.userName;
		const firstName = this.props.auth.firstName;
		const lastName = this.props.auth.lastName;
		const email = this.props.auth.email;

      return (
		<ul className="collection">
		  <li className="collection-item">Username: {userName}</li>
		  <li className="collection-item">First Name: {firstName}</li>
		  <li className="collection-item">Last Name: {lastName}</li>
		  <li className="collection-item">Email: {email}</li>
		</ul>
	  )
	}
  }


 // we need to change this to a duplicate of the other form with inline editing, and instead of submit it has an 'edit' button which makes the fields editable and or submits them, running the users API update route

// import React, {Component} from 'react'
// import { hashHistory, Router, Route, Link } from 'react-router'
// import axios from 'axios'
// import { login } from  '../reducers/auth'
// import store from '../store'
//
// export default class User extends Component {
//
// 	constructor(props) {
// 	super(props);
// 		this.state = {
// 			userName: this.state.userName,
// 			firstName: this.state.firstName,
// 			lastName: this.state.lastName,
// 			email: this.state.email,
// 			password: this.state.password
// 		};
//
// 		this.handleUserNameChange = this.handleUserNameChange.bind(this);
// 		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
// 		this.handleLastNameChange = this.handleLastNameChange.bind(this);
// 		this.handleEmailChange = this.handleEmailChange.bind(this);
// 		this.handlePasswordChange = this.handlePasswordChange.bind(this);
//
// 		this.handleSubmit = this.handleSubmit.bind(this);
// }
//
// handleUserNameChange(event) {
// 	this.setState({userName: event.target.value});
// }
// handleFirstNameChange(event) {
// 	this.setState({firstName: event.target.value});
// }
// handleLastNameChange(event) {
// 	this.setState({lastName: event.target.value});
// }
// handleEmailChange(event) {
// 	this.setState({email: event.target.value});
// }
// handlePasswordChange(event) {
// 	this.setState({password: event.target.value});
// }
//
// handleSubmit(event) {
//
// 	event.preventDefault();
// 	// On submit of the form, send a POST request with the data to the server.
// 	 return axios.put(`/api/users/${this.props.auth.id}`, {
// 		userName: this.state.userName,
// 		firstName: this.state.firstName,
// 		lastName: this.state.lastName,
// 		email: this.state.email,
// 		password: this.state.password
// 	})
// 	.then(response => store.dispatch(login(response.data.email, response.data.password)))
// 	.then( () => hashHistory.push('/user'))
// // here we need to handle button change to edit
// 	.catch(err => console.error(err.stack));
// }
//
// handleEdit(event) {
// 	event.preventDefault();
// 	// On submit of the form, send a POST request with the data to the server.
// 	 return axios.post('/api/users', {
// 		userName: this.state.userName,
// 		firstName: this.state.firstName,
// 		lastName: this.state.lastName,
// 		email: this.state.email,
// 		password: this.state.password
// 	})
// 	.then(response => store.dispatch(login(response.data.email, response.data.password)))
// 	.then( () => hashHistory.push('/user'))
// // here we need to handle button change to edit
// 	.catch(err => console.error(err.stack));
// }
//
// 	render() {
// 		return (
// 			<div>
// 				<div>
// 					<h3>New User Form</h3>
// 				</div>
// 				<div className="row">
// 					<form onSubmit={this.handleSubmit} className="col s12">
// 						<div className="row">
// 							<div className="input-field col s4">
// 								<input id="userName" type="text" className="validate"onChange={this.handleUserNameChange} required placeholder={this.state.userName}/>
// 								<label htmlFor="userName">UserName</label>
// 							</div>
// 							<div className="input-field col s4">
// 								<input id="firstName" type="text" className="validate" onChange={this.handleFirstNameChange} placeholder={this.state.firstName}/>
// 								<label htmlFor="first_name">First Name</label>
// 							</div>
// 							<div className="input-field col s4">
// 								<input id="lastName" type="text" className="validate" onChange={this.handleLastNameChange} placeholder={this.state.lastName} />
// 								<label htmlFor="last_name">Last Name</label>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="input-field col s12">
// 								<input id="password" type="password" className="validate" onChange={this.handlePasswordChange} required placeholder={this.state.password}/>
// 								<label htmlFor="password">Password</label>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="input-field col s12">
// 								<input id="email" type="email" className="validate" onChange={this.handleEmailChange} required/>
// 								<label htmlFor="email">Email</label>
// 							</div>
// 						</div>
// 						<button className="btn waves-effect waves-light" type="submit" name="action" onSubmit={this.handleSubmit}>Submit
// 							<i className="material-icons right"></i>
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		);
// 	}
// }
