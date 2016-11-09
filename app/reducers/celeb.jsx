import axios from 'axios'

export default function reducer (state = [], action) {
  switch(action.type) {

    case RECEIVE_CELEBS:
      return action.celebs;

    default:
      return state;
  }
}

// to receive all celebs stored on server

const RECEIVE_CELEBS = 'RECEIVE_CELEBS';

export const receiveCelebs = celebs => ({
  type: RECEIVE_CELEBS, celebs
})

export function fetchCelebs () {
  return function (dispatch) {
    return axios.get('/api/celebs')
    .then(function (response) {
      const action = receiveCelebs(response.data);
      return dispatch(action);
    })
    .catch(err => console.error(err.stack));
  };
};
