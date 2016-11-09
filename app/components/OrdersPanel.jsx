'use strict'

import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import store from '../store';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { grey200 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

export class OrdersPanel extends React.Component {

  render () {
    // This never shows that you're logged in -- how do you grab the auth state?
    const {filteredOrders} = this.props;
    let displayOrders;
    console.log(filteredOrders)
    // figure out how to link to user; if(true) will become something like if (this.state.auth)
    if (true) {
      return (
        <div>
        { 
          filteredOrders && filteredOrders.map(order => (
            <Paper style={{margin: 20, padding: 5, backgroundColor: grey200}}key={order.id}>
              <Subheader style={{margin: 20}}>Order Created on {order.created_at.slice(0, 10)}</Subheader>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Product</TableHeaderColumn>
                    <TableHeaderColumn>Purchase Price</TableHeaderColumn>
                    <TableHeaderColumn>Quantity</TableHeaderColumn>
                    <TableHeaderColumn></TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    order.products && order.products.map(unit => (
                        <TableRow key={unit.id}>
                          <TableRowColumn>{unit.name}</TableRowColumn>
                          <TableRowColumn>{unit.order_product.pricePerUnit}</TableRowColumn>
                          <TableRowColumn>{unit.order_product.quantity}</TableRowColumn>
                          <TableRowColumn>
                            <RaisedButton
                              label="Reorder Item"
                              href="products/:productId"
                              secondary={true}
                            >
                              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                            </RaisedButton>
                          </TableRowColumn>
                        </TableRow>
                      ))
                  }
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableRowColumn style={{fontWeight: 'bold'}}>Total: ${order.total}</TableRowColumn>
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn></TableRowColumn>
                  </TableRow>
                </TableFooter>
              </Table>
            </Paper>
          ))
        }
        </div>
      )
    }
    else {
      return (
        <h3>Please log in to see your order history</h3>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.auth
})

export default connect(mapStateToProps)(OrdersPanel);