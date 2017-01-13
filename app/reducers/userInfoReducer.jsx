import axios from 'axios';

const unknownUserInfo = {
  detail: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    isAdmin: false
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
export const recieveUserInfo = userInfo => ({
  type: RECEIVE_USER_INFO,
  userInfo
});

export const updateUserInfo = userInfo => ({
  type: UPDATE_USER_INFO,
  userInfo
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
  axios.get(`/api/users/${userId}`)
    .then(res => dispatch(recieveUserInfo(res.data)))
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
      nextState.detail = action.userInfo;
      return nextState;

    case UPDATE_USER_INFO:
      nextState.detail = action.userInfo;
      return nextState;

    default:
      return state;
  }
};

export default userInfoReducer;
