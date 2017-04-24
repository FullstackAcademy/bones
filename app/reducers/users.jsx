import axios from 'axios'

export const CREATE_USER = 'CREATE_USER'
export const LOGIN_USER = 'LOGIN_USER'


//-------------------------------- createUser ACTION CREATOR AND REDUCER


export const createUser = user => ({
    type: CREATE_USER,
    user
})

export const loginUser = user => ({
    type: LOGIN_USER,
    user
})

export function createUserThunk (firstName, lastName, email, password) {

  return function thunk (dispatch) {

    return axios.post('/api/users', {firstName: firstName, lastName: lastName, email: email, password_digest: password})
    .then(res => res.data)
    .then(user => {
      console.log('user==================', user)
      const action = createUser(user);
      dispatch(action);
    })
    .catch(err => {
      console.error(err);
    });
  };
}

export function loginUserThunk (email, password) {

  return function thunk (dispatch) {

    console.log('beginning of thunk=========================')
    return axios.post('/api/users/login', { email: email, password: password })
    .then(res => res.data)
    .then(user => {
      console.log('user===============================', user)
      const action = loginUser(user);
      dispatch(action);
    })
    .catch(err => {
      console.error(err);
    });
  };
}

let initialState = {
  currentUser: {},
};

export const userReducer = (prevState = initialState, action) => {

  const newState = Object.assign({}, prevState)

  switch (action.type) {

    case CREATE_USER:

      newState.currentUser = action.user;
      return newState;

    case LOGIN_USER:

      newState.currentUser = action.user;
      return newState;

    default:
      return prevState;
  }
}
