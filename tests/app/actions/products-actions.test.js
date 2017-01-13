import { expect } from 'chai';

import { createStore } from 'redux';
import productsReducer from 'APP/app/reducers/index';
import { RECEIVE_ALL_ROCKS, receiveAllRocks, fetchAllRocks } from 'APP/app/reducers/rocks';

describe('Products reducer', () => {

  let testStore;
  const newRocks =
  [
    { name: 'the rock', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 1.99, weight: 1, color: 'black', description: 'This rock is best companion to your daily life', stock: 2, category_id: 1
    },
    {
      name: 'fantastic rock', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 2.99, weight: 50, color: 'brown', description: 'This rock is bathed by the sun at the beach', stock: 1, category_id: 3
    }
  ]

  beforeEach('Create testing store', () => {
    testStore = createStore(productsReducer);
  });

  describe('Action creator', () => {
    it(`${RECEIVE_ALL_ROCKS} action type returns correct action`, () => {
      const action = receiveAllRocks(newRocks);
      expect(action).to.be.deep.equal({
        type: RECEIVE_ALL_ROCKS,
        rocks: newRocks
      });
    });
  });

});