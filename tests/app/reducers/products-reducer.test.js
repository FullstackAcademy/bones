import { expect } from 'chai';

import { createStore } from 'redux';
import productsReducer from 'APP/app/reducers/index';
import { RECEIVE_ALL_ROCKS, receiveAllRocks, fetchAllRocks } from 'APP/app/reducers/rocks';

describe('All roducts reducer', () => {

  let testStore;
  const newRocks = [
  {
    name: 'the rock', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 1.99, weight: 1, color: 'black', description: 'This rock is best companion to your daily life', stock: 2, category_id: 1
  },
  {
    name: 'fantastic rock', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 2.99, weight: 50, color: 'brown', description: 'This rock is bathed by the sun at the beach', stock: 1, category_id: 3
  }
]

  beforeEach('Create testing store', () => {
    testStore = createStore(productsReducer);
    //console.log('here is getState', testStore.getState().rocks);
  });

  it('has expected initial state', () => {
    expect(testStore.getState().rocks).to.deep.equal([]);
  });

  describe('Get multiple rocks', () => {
    it('gets multiple rocks to action rocks', () => {
      testStore.dispatch(receiveAllRocks(newRocks));
      const newRocksState = testStore.getState();
      expect(newRocksState.rocks).to.deep.equal(newRocks);
    });
  });

});