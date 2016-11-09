'use strict'

import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import {OrdersPanel} from './OrdersPanel';

import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export class Orders extends React.Component {

  constructor() {
    super();
    this.state = {
      value: 'all orders',
    }
    this.handleChange.bind(this)
  }

  handleChange (value) {
    this.setState({
      value: value,
    });
  };

  render() {

    const {orders} = this.props || [];

    console.log(this.props)

    return (
      <div id="orders-container" style={{margin: 5, padding: 5}}>
        <Tabs
          value={this.state.value}
          onChange={e => this.handleChange(e)}>
          <Tab label="All Orders" value="all orders" >
            <div>
              <OrdersPanel filteredOrders={orders} />
            </div>
          </Tab>
          <Tab label="Processing" value="processing">
            <div>
              <OrdersPanel filteredOrders={
                orders.filter(order => order.status === 'processing')} />
            </div>
          </Tab>
          <Tab label="Shipped" value="shipped">
            <div>
              <OrdersPanel filteredOrders={
                orders.filter(order => order.status === 'shipped')} />
            </div>
          </Tab>
          <Tab label="Delivered" value="delivered">
            <div>
              <OrdersPanel filteredOrders={
                orders.filter(order => order.status === 'delivered')} />
            </div>
          </Tab>
          <Tab label="Cancelled" value="cancelled">
            <div>
              <OrdersPanel filteredOrders={
                orders.filter(order => order.status === 'cancelled')} />
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders
})

export default connect(mapStateToProps)(Orders);
