import { expect } from 'chai';

import { createStore } from 'redux';
import productReducer from 'APP/app/reducers/index';
import { RECEIVE_A_ROCK, receiveARock, fetchARock } from 'APP/app/reducers/rock';

describe('Single product reducer', () => {

  let testStore;
  const newRock = {
    name: 'the rock', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 1.99, weight: 1, color: 'black', description: 'This rock is best companion to your daily life', stock: 2, category_id: 1 }

  beforeEach('Create testing store', () => {
    testStore = createStore(productReducer);
    //console.log('here is getState', testStore.getState().rock);
  });

  it('has expected initial state', () => {
    expect(testStore.getState().rock).to.deep.equal({});
  });

  describe('Get single rock', () => {
    it('gets a single rock to action rock', () => {
      testStore.dispatch(receiveARock(newRock));
      const newRockState = testStore.getState();
      expect(newRockState.rock).to.deep.equal(newRock);
    });
  });

});