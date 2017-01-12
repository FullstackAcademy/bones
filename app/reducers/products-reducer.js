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
      newState.list = convertAlbums(action.albums);
      break;

    case RECEIVE_PRODUCT:
      newState.selected = convertAlbum(action.album);
      break;

    default:
      return state;

  }

  return newState;

}
