import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import ProductsContainer from './Products'
import OrdersContainer from './Orders'
import Review from './Review'
import UsersContainer from './User'


export class Admin extends Component {

  render() {
    return (
      <div>





        


        <ProductsContainer />
        <OrdersContainer />
        <Review />
      </div>
  )}
}

const mapStateToProps = ({auth}) => ({
  auth
})

export default connect (
  mapStateToProps,
  null
) (Admin)