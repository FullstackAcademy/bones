import React, {Component} from 'react';

export default class NewUserForm extends Component {

	constructor(props) {

	super(props);
		this.state = {
			firstName: '',
			lastName: '',
			userName: '',
			email: '',
			password: ''
		}

		this.handleUserNameChange = this.handleFirstNameChange.bind(this);

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);

		this.handleLastNameChange = this.handleFirstNameChange.bind(this);

		this.handleEmailChange = this.handleFirstNameChange.bind(this);

		this.handlePasswordNameChange = this.handleFirstNameChange.bind(this);

}

handleUserNameChange(event) {
	this.setState({userName: event.target.value});
}

handleFirstName(event) {
	this.setState({firstName: event.target.value});
}

handleLastNameChange(event) {
	this.setState({lastName: event.target.value});
}

handleEmailChange(event) {
	this.setState({password: event.target.value});
}

handlePasswordChange(event) {
	this.setState({email: event.target.value});
}

	render() {

		return (
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s4">
							<input placeholder="user name" id="userName" type="text" className="validate"/>
							<label htmlFor="last_name">Last Name</label>
						</div>
						<div className="input-field col s4">
							<input placeholder="first name" id="firstName" type="text" className="validate"/>
							<label htmlFor="first_name">First Name</label>
						</div>
						<div className="input-field col s4">
							<input placeholder="last name" id="lastName" type="text" className="validate"/>
							<label htmlFor="last_name">Last Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="password" type="password" className="validate"/>
							<label htmlFor="password">Password</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="email" className="validate"/>
							<label htmlFor="email">Email</label>
						</div>
					</div>
				</form>
			</div>
		);


	}
}
