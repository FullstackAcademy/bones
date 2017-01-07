import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';

const testArr = [{title: 'test'}];
export default class Products extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
   //this.nextJoke()
   console.log('tried mounting');
   axios.get('/api/products')
   .then(res => res.data)
   .then( products => {
    this.setState({products: products});
   });

  }

  

  render() {
    const products = this.state.products && this.state.products.map(product => {
      return (
        <tr key={product.id}>
        <Link to={`/products/${product.id}`}>
        <td> {product.title} </td> 
        <td> {product.category.join(', ')} </td>
        <td> {product.photo_url} </td>
        <td> {product.current_price} </td>
        <td> {product.description} </td>
        <td> {product.availability} </td>
        <td> {product.inventory} </td>
        </Link>
        </tr>
      )
    });
    console.log('product: ',products);
    return (
      <div >
        <h1>PRODUCTS</h1>
        <table>
        <tr>
        <th> title </th>
        <th> category </th>
        <th> photo_url </th>
        <th> current_price </th>
        <th> description </th>
        <th> availability </th>
        <th> inventory </th>

        </tr>
        {
          products 
        }
        </table>
      </div>
    )
  }
}