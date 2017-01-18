import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import store from '../store'

export default class Checkout extends Component {
constructor(props){
	super(props);
}

render(){
	return  (<form onSubmit={this.onSubmit} >
        <br/>
        <input type='text' data-stripe='number' placeholder='credit card number' /><br />
        <input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
        <input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
        <input type='text' data-stripe='cvc' placeholder='cvc' /><br />
        <input type='submit' value='Purchase' />
      </form>);
    }
 }
