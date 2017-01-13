import axios from 'axios';
import {browserHistory} from 'react-router';



// ---------------------> Action type constant <---------------------

const AUTHENTICATED = 'AUTHENTICATED';

// ----------------> ACTION CREATORS <----------------

export const authenticated = user => ({
  type: AUTHENTICATED, user
});

// --------------------> THUNKS <--------------------

export const login = (username, password) =>
  dispatch => {
    axios.post('/api/auth/local/login',
    {username, password})
    .then(() => dispatch(whoami()))
    .then(() => browserHistory.push('/'))
    .catch(() => dispatch(whoami()));
  }

export const signup = (firstName, lastName, email, password) =>
  dispatch => {
    axios.post('/api/users',
    {firstName, lastName, email, password})
    .then((res) => {
      dispatch(login(res.data.email, res.data.password))
    })
    .catch(() => dispatch(whoami()));
  }

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()));

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data;
        dispatch(authenticated(user));
      })
      .catch(failed => dispatch(authenticated(null)));


// --------------------> REDUCER <--------------------


const reducer = (state = {}, action) => {
  switch(action.type) {
    case AUTHENTICATED:
      return action.user;
  }
  return state;
};

export default reducer;
