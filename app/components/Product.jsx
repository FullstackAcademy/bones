// COMPONENT

'use strict'

import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Review from './Review';

import Chip from 'material-ui/Chip';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  chip: {
    margin: 4,
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

// const currentProduct = {
//   name: 'Hillary\'s Pantsuit', description: 'Classic red pantsuit', quantity: 3, categories: 'Clothing', photoURL: 'http://s1.r29static.com//bin/entry/567/x,80/1660164/image.jpg'
// }

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'description',
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    })
  }

  render() {
    const { currentProduct } = this.props || {}
    return (
      <div className="mdl-grid" id="product">
        <div className="mdl-cell mdl-cell--5-col">
          <img src={currentProduct.photoURL} />
        </div>
        <div className="mdl-cell mdl-cell--7-col group" id="product-right">
          <h1>{currentProduct.name}</h1>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab label="Description" value="description" >
              <div>
                <h2>Why It's Fabulous</h2>
                <p>{currentProduct.description}
                </p>
              </div>
            </Tab>
            <Tab label="Reviews" value="reviews" className="reviews">
              <div>
                <h2>Who Loves It</h2>
                  {this.props.currentProduct.reviews ? this.props.currentProduct.reviews.map(review =>{
                    var stars = ''
                    for (let i = 0; i < review.stars; i++) {
                      stars += '⭐ '
                    }
                    return (
                    <div className="review-card mdl-card mdl-card mdl-shadow--2dp">
                      <div className='mdl-card__title'>
                        <div>{review.user.firstName} {review.user.lastName.substr(0, 1)}.</div>
                        <div>{stars}/ 5 stars</div>
                      </div>
                      <div className='mdl-card__supporting-text'>{review.text}</div>
                      <div className='mdl-card__actions'>{review.created_at.substr(0, 10)}</div>
                    </div>)}
                  )
                  :
                  <h3>
                  There are no reviews for this product yet
                  </h3>
                  }
                  <Review />
              </div>
            </Tab>
          </Tabs>
          <div className="below-tabs">
          <span>Price: ${currentProduct.price}</span>
          <div>
          <label>Quantity</label>
          <select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
          </div>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          onClick={evt => {
            evt.preventDefault()
            console.log('in onClick')
            addProduct(this.props.currentProduct, this.state.quantity)
          } }>
         BUY
         </button>
         </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
   });

export default connect(mapStateToProps, null)(Product);
