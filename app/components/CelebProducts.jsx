'use strict'

import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import store from '../store';
import axios from 'axios';
import {updateCartId} from '../reducers/cart'



export class CelebProducts extends React.Component {
  constructor() {
    super()
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);

  }
  add(product_obj){
    let total;
    // console.log(this.props, "this.props in add product")
    if (!this.props.auth && !window.localStorage.getItem('orderId')){ //if user is not logged and the order id is null
      total = product_obj.product.price * product_obj.product.quantity
      console.log(total, "this is the total")
      // console.log(typeof product.price, typeof product.quantity)
      // console.log(product.product, "this is product")

      axios.post('/api/orders', {total: total, user: null, products:[product_obj.product]})
      .then((res) =>{
        window.localStorage.setItem('orderId', (res.data.id).toString());

        store.dispatch(updateCartId({order_id: res.data.id, user_id: null, products: [product_obj.product]}))
      }
      )
      .catch(err=> console.log(err.stack))
    }
    else if (!this.props.auth && window.localStorage.getItem('orderId')){ //if user is not logged in, but there's an existing created order
      let id = parseInt(window.localStorage.getItem('orderId'));
      total = this.props.cart.total + (product_obj.product.price * product_obj.product.quantity)
      axios.put(`/api/orders/${id}`, {total: total, user_id: null, status: this.props.cart.status, products:this.props.cart.products.concat(product_obj.product)})
      .then(res=>{
        console.log("what", res);
        store.dispatch(updateCartId({order_id: id, user_id: null, products: this.props.cart.products.concat(product_obj.product)}))
      }
      )
    }else if(this.props.cart.order_id){
      total = this.props.cart.total + (product_obj.product.price * product_obj.product.quantity)
      axios.put(`/api/orders/${this.props.cart.order_id}`, {total: total, user_id: this.props.auth.id, status: this.props.cart.status, products:this.props.cart.products.concat(product_obj.product)})
      .then(res=>
        store.dispatch(updateCartId({order_id: this.props.cart.order_id, user_id: this.props.auth.id, products: this.props.cart.products.concat(product_obj.product)}))
      )
    }else{
      total = product_obj.product.price;
      axios.post('/api/orders', {total: total, user: this.props.auth.id, products:[product_obj.product]})
      .then((res) =>
        store.dispatch(updateCartId({order_id: res.data.id, user_id: this.props.auth.id, products: [product_obj.product]}))
      )
      .catch(err=> console.log(err.stack))

    }
  }

  del(product){
    console.log("DEL",product);
    if (!this.props.auth && !this.props.cart.order_id){ //if user is not logged and the order id is null



    }
  }

  render() {
    const { celeb } = this.props || []
    let idx = 0;
    return (
      <div id="productsTable">
        <div className='mdl-grid'>
          <h2 className='mdl-cell mdl-cell--12-col'>{celeb.name} Products</h2>
          {celeb.products && celeb.products.map(product => (
              <div key={product.id} className="mdl-card mdl-cell mdl-cell--4-col mdl-shadow--2dp">
                <Link to={`/products/${product.id}`}>
                  <div className="mdl-card__media">
                    <img src={product.photoURL}/>
                  </div>
                  <div className="mdl-card__title">
                    <span>{product.name}</span>
                  </div>
                  <div className="mdl-card__supporting-text">
                  {product.categories && product.categories.map(category => (
                      <div className='mdl-chip' key={idx++}>
                        <span className="mdl-chip__text">{category}</span>
                      </div>
                    ))
                  }
                  </div>
                </Link>
                  <RaisedButton type="submit" label="ADD" primary={true} onClick={evt=>{ evt.preventDefault(); this.add({product});}}/>
                  <RaisedButton type="submit" label="DELETE" primary={true}  onClick={evt=>{ evt.preventDefault(); this.del({product});}}/>
              </div>
            ))
          }
        </div>
     </div>
    )
  }
}

const mapStateToProps = (state) => ({
  celeb: state.currentCeleb
 })


export default connect(mapStateToProps)(CelebProducts);
