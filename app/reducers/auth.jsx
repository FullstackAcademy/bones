import axios from 'axios'
import { update } from '../action-creators/Users'
import { UPDATE } from '../constants'
import { hashHistory, Router } from 'react-router'

// constants and their action creators:
// sets logged in user on state as auth
const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

// removes logged out user as auth
const LOGOUT_USER = 'LOGOUT_USER'
export const logout_user =  user => ({
  type: LOGOUT_USER, user
})

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user;
  case LOGOUT_USER:
    return action.user
  default: return state;
  }
  return state
};

// async thunk action creators
export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      {username, password})
      .then( () => dispatch(whoami()))
      .then( () => Materialize.toast('Welcome! You are logged in!', 4000))
      .then( () => hashHistory.push('/home'))
      .catch( () => dispatch(whoami()));

export const updateUser = user => dispatch => {
  axios.put(`/api/users/${user.id}`, user)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Creating user: ${user} unsuccesful`, err))
}

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then( () => dispatch( whoami() )  )
	  .then( () => Materialize.toast('Thanks! You are logged out.', 4000))
      .then( () => hashHistory.push('/home'))
      .catch(() => dispatch(whoami()))

export default reducer
