import axios from 'axios';

// ---------------------> Action type constant <---------------------
export const SET = 'SET_A_CURRENT_USER';
export const REMOVE = 'REMOVE_A_CURRENT_USER';

// ----------------> ACTION CREATORS <----------------
const set = user => ( {type: SET, user} );
const remove = () => ( {type: REMOVE} );

// ----------------> DISPATCH <----------------
export const logoutUser = () => dispatch(remove);

// --------------------> THUNKS <--------------------
export const loginUser = credentials => dispatch => {
  axios.post('/api/users/login', credentials)
    .then(res => {
      dispatch(set(res.data));
    })
    .catch(err => {
      console.error('Unable to login', err);
    });
};

// --------------------> REDUCER <--------------------
export default function user(state = {}, action) {
  switch (action.type) {
    case SET:
      return action.user;
    case REMOVE:
      return Object.assign({}, state, {user: {}});
    default:
      return state;
  }
}

