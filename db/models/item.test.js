'use strict';

const db = require('APP/db');
const Item = require('./item');
const {expect} = require('chai');

describe('Item', () => {
  before('wait for the db', () => db.didSync);

  let item;
  beforeEach(() => {
    item = Item.build({
    });
  });

  describe('Quantity', () => {
    it('Defaults to 1', () => {
      item.save()
        .then(item => expect(item.quantity).to.equal(1));
    });

    it('Has an instance method for adding qty.', () => {
      item.save()
        .then(item => {
          item.add();
          return item;
        })
        .then(item => expect(item.quantity).to.equal(2));
    });

    it('Has an instance method for subtracting qty.', () => {
      item.save()
        .then(item => {
          item.subtract();
          return item;
        })
        .then(item => expect(item.quantity).to.equal(0));
    });
  });
});
