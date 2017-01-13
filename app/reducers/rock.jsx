import axios from 'axios';

// ---------------------> Action type constant <---------------------
export const RECEIVE_A_ROCK = 'RECEIVE_A_ROCK';

// ----------------> ACTION CREATORS <----------------
export const receiveARock = rock => ({
  type: RECEIVE_A_ROCK,
  rock
});

// --------------------> THUNKS <--------------------
export const fetchARock = (id) => dispatch => {
  axios.get(`/api/rocks/${id}`)
    .then(res => {
      dispatch(receiveARock(res.data));
    })
    .catch(err => {
      console.error('Unable to fetch the specific rock', err);
    });
};

// --------------------> REDUCER <--------------------
export default function rock(state = {}, action) {
  switch(action.type) {
    case RECEIVE_A_ROCK:
      return action.rock
    default:
      return state;
  }
}
