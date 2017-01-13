import React from 'react';
import NewUserForm from './NewUserForm';

 export default class UserContainer extends React.Component {

	 constructor(props) {

	 super(props);
		 this.state = {
			 firstName: '',
			 lastName: '',
			 userName: '',
			 email: '',
			 password: ''
		 }

		 	this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
	 }

	 handleFirstNameChange(event) {
		this.setState({firstName: event.target.value});
	}

    render() {

      return (

		  <div>
			  < NewUserForm />

		  </div>
		)
	}
  }
