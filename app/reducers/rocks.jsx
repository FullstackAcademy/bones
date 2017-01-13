import axios from 'axios';

// ---------------------> Action type constant <---------------------
export const RECEIVE_ALL_ROCKS= 'RECEIVE_ALL_ROCKS';

// ----------------> ACTION CREATORS <----------------
export const receiveAllRocks = rocks => ({
  type: RECEIVE_ALL_ROCKS,
  rocks
});

// --------------------> THUNKS <--------------------

export const fetchAllRocks = () => dispatch => {
  axios.get('/api/rocks')
    .then(res => dispatch(receiveAllRocks(res.data)))
    .catch(err => {
      console.error('Unable to fetch rocks products', err);
    });
};

// --------------------> REDUCER <--------------------
export default function rocks(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_ROCKS:
      return action.rocks;
    default:
      return state;
  }
}
