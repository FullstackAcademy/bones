'use strict';

const db = require('APP/db');
const Order = require('./order');
const {expect} = require('chai');

describe('Order', () => {
  before('wait for the db', () => db.didSync);

  let order;
  beforeEach(() => {
    order = Order.build({

    });
  });

  describe('Status', () => {
    it('Defaults to in cart', () => {
      return order.save()
        .then(order => expect(order.status).to.equal('in cart'));
    });
  });
});
