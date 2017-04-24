import React from 'react'
import store from '../store'
import { createBillingInfo } from '../reducers/checkout'

export class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      cardNumber: '',
      expDate: '',
      ccvNumber: '',
      address: '',
      city: '',
      state: '',
      zipCode: ''
    } //comment
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const thunk = createBillingInfo(this.state.cardNumber, this.state.expDate, this.state.ccvNumber, this.state.address, this.state.city, this.state.state, this.state.zipCode)
    store.dispatch(thunk)
  }

  render () {

    return (
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label className="col-sm-2 control-label">Credit Card Number</label>
            <div className="col-sm-10">
              <input type="text" name="firstName" value={this.state.cardNumber} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Expiry Date</label>
            <div className="col-sm-10">
              <input type="text" name="lastName" value={this.state.expDate} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">CCV Number</label>
            <div className="col-sm-10">
              <input type="text" name="email" value={this.state.ccvNumber} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Address</label>
            <div className="col-sm-10">
              <input type="text" name="password_digest" value={this.state.address} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">City</label>
            <div className="col-sm-10">
              <input type="text" name="firstName" value={this.state.city} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">State</label>
            <div className="col-sm-10">
              <input type="text" name="firstName" value={this.state.state} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">ZipCode</label>
            <div className="col-sm-10">
              <input type="text" name="firstName" value={this.state.zipCode} className="form-control" placeholder="" onChange={this.handleChange} />
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
