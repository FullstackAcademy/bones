import { expect } from 'chai';

import { createStore } from 'redux';
import productReducer from 'APP/app/reducers/index';
import { RECEIVE_A_ROCK, receiveARock, fetchARock } from 'APP/app/reducers/rock';

describe('Single product reducer', () => {

  let testStore;
  const newRock = {
    name: 'the rock', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT', price: 1.99, weight: 1, color: 'black', description: 'This rock is best companion to your daily life', stock: 2, category_id: 1
  }

  beforeEach('Create testing store', () => {
    testStore = createStore(productReducer);
  });

  describe('Action creator', () => {
    it(`${RECEIVE_A_ROCK} action type returns correct action`, () => {
      const action = receiveARock(newRock);
      expect(action).to.be.deep.equal({
        type: RECEIVE_A_ROCK,
        rock: newRock
      });
    });
  });

});