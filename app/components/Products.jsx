'use strict'

import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
};

export class Products extends React.Component {
  render() {
    const { products } = this.props || []
    return (
      <div id="productsTable">
        <h2>All Products</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Photo</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Quantity</TableHeaderColumn>
              <TableHeaderColumn>Categories</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              products && products.map(product => (
                <TableRow key={products.id}>
                  <TableRowColumn><img src={product.photoURL}/></TableRowColumn>
                  <TableRowColumn>{product.name}</TableRowColumn>
                  <TableRowColumn>{product.description}</TableRowColumn>
                  <TableRowColumn>{product.quantity}</TableRowColumn>
                  <TableRowColumn>
                    {
                      product.categories && product.categories.map(category => (
                        <Chip style={styles.chip}>{category}</Chip>
                      ))

                    }
                  </TableRowColumn>
                </TableRow>
              ))
            }     
          </TableBody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  products: state.products })

export default connect(mapStateToProps)(Products);


