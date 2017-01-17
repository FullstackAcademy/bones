import React from 'react';

export const AccountSettings = () => (
	<div>
		<div>
			<h3>Edit Account Details</h3>
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
