import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT
} from '../constants';


const initialProductsState = {
  selected: {},
  list: []
};

export default function (state = initialProductsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PRODUCTS:
      newState.list = action.products;
      break;

    default:
      return state;

  }

  return newState;

}
