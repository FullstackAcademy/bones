import axios from 'axios';

// ---------------------> Action type constant <---------------------
export const RECEIVE_ALL_ROCKS = 'RECEIVE_ALL_ROCKS';
export const RECEIVE_ALL_CATEGORY_ROCKS = 'RECEIVE_ALL_CATEGORY_ROCKS';

// ----------------> ACTION CREATORS <----------------
export const receiveAllRocks = rocks => ({
  type: RECEIVE_ALL_ROCKS,
  rocks
});

// Get all rocks pertaining to a category
export const receiveAllCategoryRocks = rocks => ({
  type: RECEIVE_ALL_CATEGORY_ROCKS,
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

export const fetchAllCategoryRocks = (category) => dispatch => {
  axios.get(`/api/categories/${category}`)
  .then(res => dispatch(receiveAllCategoryRocks(res.data)))
  .catch(err => {
    console.error('Unable to fetch rocks pertaining to the category');
  });
};

// --------------------> REDUCER <--------------------
export default function rocks(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_ROCKS:
      return action.rocks;
    case RECEIVE_ALL_CATEGORY_ROCKS:
      return action.rocks;
    default:
      return state;
  }
}
