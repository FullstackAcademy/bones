import axios from 'axios';

const reducer = (state=[], action) => {
	switch(action.type) {
		case RECEIVE_CATEGORIES:
			return action.categories;
	}
	return state;
};

const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const getCategories = () => {
  return dispatch => {
    axios.get('/api/categories')
    	.then(res => res.data)
      .then(categories => {
        categories = categories.sort((catA, catB) => {
          if (catA.name < catB.name) return -1;
          if (catA.name > catB.name) return 1;
          return 0;
        });
        dispatch(receiveCategories(categories));
      });
  };
};

export default reducer;