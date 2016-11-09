const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  case UPDATE_USER:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
const UPDATE_USER = 'UPDATE_USER'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const updateuser = user => ({
  type: UPDATE_USER, user
})

//import axios from 'axios'

// export const login = (username, password) =>
//   dispatch => {
//     const body = {username, password}
//     console.log('req body=', body)
//     return axios.post('/api/users', body)
//       .then(() => dispatch(whoami()))
//   }

// export const whoami = () =>
//   dispatch =>
//     axios.get('/api/auth/whoami')
//       .then(response => {
//         const user = response.data
//         if (!Object.keys(user).length) {
//           return dispatch(authenticated(null))
//         }
//         dispatch(authenticated(user))
//       })

export default reducer