import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../constants';
import axios from 'axios';

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});


//**TODO**//
export const getProductById = productId => {
  return dispatch => {
    axios.get(`/api/products/${productId}`)
      .then(response => {
        dispatch(receiveProduct(response.data));
      });
  };
};


export const getProductsByTag = tag => {
  return dispatch => {
    axios.get(`/api/products`)
      .then(response =>{
        dispatch(receiveProducts(response.data.filter(elem => elem.tags.indexOf(tag) >= 0)))
      })
  }
}
