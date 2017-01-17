import axios from 'axios';

const unknownUserInfo = {
  detail: {
    basicInfo: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      isAdmin: false
    },
    orders: [],
    addresses: []
  },
  expanded: false
};

// ---------------------> Action type constant <---------------------
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const EXPAND = 'EXPAND';
export const TOGGLE = 'TOGGLE';
export const REDUCE = 'REDUCE';
export const EXPAND_CHANGE = 'EXPAND_CHANGE';

// ----------------> ACTION CREATORS <----------------
export const recieveUserInfo = (detail) => ({
  type: RECEIVE_USER_INFO,
  detail
});

export const updateUserInfo = detail => ({
  type: UPDATE_USER_INFO,
  detail
});

export const handleExpand = () => ({
  type: EXPAND
});

export const handleToggle = (event, toggle) => ({
  type: TOGGLE,
  toggle
});

export const handleReduce = () => ({
  type: REDUCE
});

export const handleExpandChange = (expanded) => ({
  type: EXPAND_CHANGE,
  expanded
});

// --------------------> THUNKS <--------------------

export const fetchUserInfo = userId => dispatch => {
  const getBasicUserInfo = () => axios.get(`/api/users/${userId}`);
  const getUserAddresses = () => axios.get(`/api/users/${userId}/addresses`);
  const getUserOrders = () => axios.get(`/api/users/${userId}/orders`);
  axios.all([getBasicUserInfo(), getUserAddresses(), getUserOrders()])
    .then(axios.spread((basicInfo, addresses, orders) => {
      dispatch(recieveUserInfo({
        basicInfo: basicInfo.data,
        addresses: addresses.data,
        orders: orders.data
      }));
    }))
    .catch(err => {
      console.error('Fetching the user info failed', err);
    });
};

// --------------------> REDUCER <--------------------
const userInfoReducer = (state = unknownUserInfo, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case EXPAND:
      nextState.expanded = true;
      return nextState;

    case TOGGLE:
      nextState.expanded = action.toggle;
      return nextState;

    case REDUCE:
      nextState.expanded = false;
      return nextState;

    case EXPAND_CHANGE:
      nextState.expanded = action.expanded;
      return nextState;

    case RECEIVE_USER_INFO:
      nextState.detail = action.detail;
      return nextState;

    case UPDATE_USER_INFO:
      nextState.detail = action.detail;
      return nextState;

    default:
      return state;
  }
};

export default userInfoReducer;
