// REDUCER

import axios from 'axios'

export default function reducer (state = {}, action) {
  switch(action.type) {

    case RECEIVE_CURRENT_PRODUCT:
      return action.currentProduct;

    default:
      return state;
  }
}

const RECEIVE_CURRENT_PRODUCT = 'RECEIVE_CURRENT_PRODUCT';

export const receiveCurrentProduct = currentProduct => ({
  type: RECEIVE_CURRENT_PRODUCT, currentProduct
})

export const fetchCurrentProduct = (productId) => {
  return function (dispatch) {
    axios.get(`/api/products/${productId}`)
      .then(function (response) {
        const action = receiveCurrentProduct(response.data);
        return dispatch(action)
      })
      .catch(err => console.error(err.stack));
  };
};
