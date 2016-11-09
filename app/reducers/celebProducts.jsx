import axios from 'axios'

export default function reducer (state = {}, action) {
  switch(action.type) {

    case RECEIVE_CURRENT_CELEB:
      return action.currentCeleb;

    default:
      return state;
  }
}

// to receive all celebs stored on server

const RECEIVE_CURRENT_CELEB = 'RECEIVE_CURRENT_CELEB';

export const receiveCurrentCeleb = currentCeleb => ({
  type: RECEIVE_CURRENT_CELEB, currentCeleb
})

export function fetchCurrentCeleb (celebId) {
  return function (dispatch) {
    return axios.get(`/api/celebs/${celebId}`)
    .then(function (response) {
      const action = receiveCurrentCeleb(response.data);
      return dispatch(action);
    })
    .catch(err => console.error(err.stack));
  };
};
