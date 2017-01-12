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
    axios.get(`/api/albums/${albumId}`)
      .then(response => {
        dispatch(receiveAlbum(response.data));
      });
  };
};
