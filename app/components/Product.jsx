import React, { Component } from 'react';
import axios from 'axios';

const testArr = [{title: 'test'}];
export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };


  }

  componentDidMount() {
   //this.nextJoke()
   console.log('getting product details');
   axios.get(`/api/products/${this.props.params.productId}`)
   .then(res => res.data)
   .then( product => {
    this.setState({product: product});
   });

  }

  handleClick(evt) {
    console.log('clicked cart');
  }

  

  render() {
    {console.log(this)}
    //const product = this.state.product;

    const product = this.state.product;

    const productComponent = Object.keys(product).length>0 ? 
      (
      <tr key={product.id}>
      <td> {product.title} </td> 
      <td> {product.category.join(', ')} </td>
      <td> {product.photo_url} </td>
      <td> {product.current_price} </td>
      <td> {product.description} </td>
      <td> {product.availability} </td>
      <td> {product.inventory} </td>
      </tr>
      ) :
      null;

    console.log('product: ',product);
    return (
      <div >
        <h1>PRODUCT</h1>
        <table>
        <tbody>
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
          productComponent
        }
        
        </tbody>

        </table>
        <button onClick={this.handleClick}>Add to Cart</button>
      </div>
    )
  }
}


// const product = this.props.product && (() => {
//   return (
//     <tr key={product.id}>
//     <td> {product.title} </td> 
//     <td> {product.category.join(', ')} </td>
//     <td> {product.photo_url} </td>
//     <td> {product.current_price} </td>
//     <td> {product.description} </td>
//     <td> {product.availability} </td>
//     <td> {product.inventory} </td>
//     </tr>
//   )
// });