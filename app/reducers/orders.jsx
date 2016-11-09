import axios from 'axios'


// orders reducer

export default function reducer (state = [], action) {
  switch(action.type) {

    case RECEIVE_ORDERS:
      return action.orders;

    case CLEAR_ORDERS:
      return [];

    default:
      return state;
  }
}

// to get all orders stored on server

const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
const CLEAR_ORDERS = 'CLEAR_ORDERS'

export const receiveOrders = (orders, userId) => ({
  type: RECEIVE_ORDERS, orders, userId
})

export const clearOrders = () => ({
  type: CLEAR_ORDERS
})

export const fetchOrders = (userId) => {
  console.log('the userId:', userId)
   if (userId) {
    return function (dispatch) {
      axios.get(`/api/orders/users/${userId}`)
      .then(function (response) {
        const action = receiveOrders(response.data);
        return dispatch(action);
      })
      .catch(err => console.error(err.stack));
    };
   }
};
