const reducer = (state={products:[], user_id: null, order_id: null}, action) => {
  switch(action.type) {
    case INITIAL_CARTS:
        return action.orders
    case REMOVE_PRODUCT:
        var index;
        for(var i = 0; i < state.length; i++){
            if(state[i].id == action.product.id){
                index = i;
                break;
            }
        }
        return action.orders.splice(i,1);

   }
     return state
}
const INITIAL_CARTS = 'INITIAL_CARTS';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
// const AUTHENTICATED = 'AUTHENTICATED'
// const UPDATE_USER = 'UPDATE_USER'
// export const authenticated = user => ({
//   type: AUTHENTICATED, user
// })

export const updateCartId = orders => ({
    type: INITIAL_CARTS,
    orders
})
export const removeProductId = product => ({
    type: REMOVE_PRODUCT,
    product
})


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