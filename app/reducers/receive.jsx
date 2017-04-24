// import { RECEIVE_CATEGORIES, RECEIVE_PRODUCTS, RECEIVE_USERS } from '../constants';   //No longer necessary... change constants asdlfkjadspf

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER'


//-------------------------------- CATEGORIES ACTION CREATOR AND REDUCER


export const receiveCategoriesAC = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
})

// const initialCatState = {
//   name: '',
//   imageURL: '',
// };

const initialCatState = [];

export const recCatReducer = (newState = initialCatState, action) => {
  switch (action.type) {
  case RECEIVE_CATEGORIES:
    return action.categories.slice(0);
  }
  return newState
}


//-------------------------------- PRODUCTS ACTION CREATOR AND REDUCER

export const receiveProductsAC = products => ({
    type: RECEIVE_PRODUCTS,
    products
})

// const initialProdState = {
//   title: '',
//   description: '',
//   price: null,
//   inventory: ,
//   wronnngggg!!!
// };

const initialProdState = [];

export const recProdReducer = (newState = initialCatState, action) => {
  switch (action.type) {
  case RECEIVE_PRODUCTS:
    return action.products.slice(0);
  }
  return newState
}


// export const getAlbumById = albumId => {
//   return dispatch => {
//     axios.get(`/api/albums/${albumId}`)
//       .then(response => {
//         dispatch(receiveAlbum(response.data));
//       })
//   }
// }
