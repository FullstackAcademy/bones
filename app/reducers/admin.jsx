import axios from 'axios';

// ---------------------> Action type constant <---------------------
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const EDIT_USER_BASIC = 'EDIT_USER_BASIC';
export const EDIT_USER_ADDRESS = 'EDIT_USER_ADDRESS';

// ----------------> ACTION CREATORS <----------------
export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const editUser = (user) => ({
  type: EDIT_USER_BASIC,
  user
})

export const editAddress = (userId, address) => ({
  type: EDIT_USER_ADDRESS,
  address,
  userId
})


// --------------------> THUNKS <--------------------
export const fetchUsers = () => dispatch => {
  axios.get('api/users')
    .then(res => dispatch(receiveAllUsers(res.data)))
    .catch(err => console.error('Unable to fetch all users', err));
};

export const editUserBasicThunk = (id, firstName, lastName, email) => dispatch => {
  axios.put(`api/users/${id}`, {firstName, lastName, email})
    .then(res => {
      console.log('firstName', firstName);
      console.log('res', res);
      dispatch(editUser(id, res.data));
    })
    .catch(err => console.error('Unable to fetch all users', err));
};

export const editUserAddressThunk = (id, street, city, state, zipcode) => dispatch => {
  axios.put(`api/users/${id}/addresses`, {street, city, state, zipcode})
    .then(res => res.data)
    .then(address => dispatch(editAddress(id, address)))
    .catch(err => console.error('Unable to fetch all users', err));
};

// --------------------> REDUCER <--------------------
export default function users(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case EDIT_USER_BASIC:
      return state.map((user) => {
        if (user.id === action.user.id) {
          return action.user;
        }
        return user;
      });
    case EDIT_USER_ADDRESS:
      return state.map((user) => {
        if (user.id === action.id) {
          let newUser = Object.assign({}, user);
          newUser[addresses][0] = action.address;
          return newUser;
        }
        return user;
      });
    default:
      return state;
  }
};
