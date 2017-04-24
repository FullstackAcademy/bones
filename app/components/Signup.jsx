import React from 'react'
import store from '../store'

import { createUserThunk } from '../reducers/users'

export class Signup extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password_digest: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const thunk = createUserThunk(this.state.firstName, this.state.lastName, this.state.email, this.state.password_digest)
    store.dispatch(thunk)
  }

  render () {

    return (

        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label className="col-sm-2 control-label">First Name</label>
            <div className="col-sm-10">
              <input type="text" name="firstName" value={this.state.firstName} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Last Name</label>
            <div className="col-sm-10">
              <input type="text" name="lastName" value={this.state.lastName} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="text" name="email" value={this.state.email} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="text" name="password_digest" value={this.state.password_digest} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>

    )
  }
}

// import {} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

function mapState(state, ownProps) {
  return {}
}

function mapDispatch(dispatch, ownProps) {
  return {}
}

const SignupContainer = connect(mapState, mapDispatch)(Signup)

export default SignupContainer
