// this is the account details page
import React from 'react';

export default class User extends React.Component {
	constructor(props) {
		super(props)
		console.log('this.props:', this.props)
	}
    render() {

		const userName = this.props.auth.userName;
		const firstName = this.props.auth.firstName; const lastName = this.props.auth.lastName;
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
