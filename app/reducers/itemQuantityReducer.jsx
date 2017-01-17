const initialState = {
  quantity: 0,
  errorText: ''
};

// ---------------------> Action type constant <---------------------
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';


// ----------------> ACTION CREATORS <----------------
export const updateQuantity = amount => ({
  type: UPDATE_ITEM_QUANTITY,
  amount
});


// --------------------> THUNKS <--------------------


// --------------------> REDUCER <--------------------
const itemQuantityReducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case UPDATE_ITEM_QUANTITY:
      nextState.quantity = action.amount;
      nextState.errorText = (action.amount <= 0) ? 'Please enter a valid amount.' : '';
      return nextState;

    default:
      return state;
  }
};

export default itemQuantityReducer;
