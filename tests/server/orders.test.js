const db = require('APP/db');
const { expect } = require('chai');
const app = require('APP/server/start');
const Order = require('APP/db/models/order');
const request = require('supertest-as-promised');

const fakeOrder1 = {
  status: 'completed'
};

const fakeOrder2 = {
  status: 'processing'
};

describe('/api/orders', () => {

  beforeEach('create fake orders', () =>
    db.didSync
      .then(() => Order.create(fakeOrder1))
      .then(() => Order.create(fakeOrder2))
  );

  describe('GET all the orders', () => {
    it('returns all the orders', () =>
      request(app)
        .get('/api/orders')
        .then(res => {
          expect(res.body.length).to.equal(2);
          expect(res.body[1]).to.contain(fakeOrder1);
        })
      );
  });

  //*TODO
  describe('GET a single order', () => {
    xit('returns one order', () =>
      request(app)
        .get('/api/orders/1')
        .then(res => {
          expect(res.body).to.equal('ok');
        })
      );
  });

  describe('POST a new order', () => {
    it('adds a new order', () =>
      request(app)
        .post('/api/orders')
        .send({ status: 'processing' })
        .then(res => {
          expect(res.body).to.contain({ status: 'processing' });
        })
      );
  });

  //*TODO
  describe('PUT', () => {
    it('edits a order', () =>
      request(app)
        .put('/api/orders/edit/1')
        .send({ status: 'cancelled' })
        .then(res => {
          expect(res.body).to.contain({ status: 'cancelled' });
        })
      );
  });

});
