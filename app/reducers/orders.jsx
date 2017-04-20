import axios from 'axios'

export const ALL_ORDERS = 'ALL_ORDERS'
export const ALL_PROD_ON_ORDER = 'ALL_PROD_ON_ORDER'

//-------------------------------- createUser ACTION CREATOR AND REDUCER


export const allOrders = orders => ({
    type: ALL_ORDERS,
    orders
})

let initialState = {
  orders: [],
};

export const ordersReducer = (prevState = initialState, action) => {

  const newState = Object.assign({}, prevState)

  switch (action.type) {

    case ALL_ORDERS:

      //Shouldn't this be in the store already? Why does it need to come through on an action?
      //I would think a separate set orders would set it
      newState.orders = [...action.orders];
      return newState;

    default:
      return prevState;
  }
}
