import * as actions from '../constants';
import axios from 'axios';

export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case actions.RECEIVE_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}

// --- ACTIONS ---

export function fetchSingleProduct(productId) {
  return dispatch => {
    axios.get(`/api/products/${productId}`)
    .then(response => response.data)
    .then(product => dispatch({type: actions.RECEIVE_SINGLE_PRODUCT, product}))
    .catch(console.error);
  }
}
