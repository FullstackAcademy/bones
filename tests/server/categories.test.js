const db = require('APP/db');
const { expect } = require('chai');
const app = require('APP/server/start');
const request = require('supertest-as-promised');
const Category = require('APP/db/models/category');

const utilCategory = {
  name: 'utility'
};

const compCategory = {
  name: 'companion'
};

describe('/api/categories', () => {

  before('create a category', () =>
    db.didSync
      .then(() => Category.create(utilCategory))
      .then(() => Category.create(compCategory))
  );

  afterEach(function () {
    Category.truncate({ cascade: true });
  });

  describe('GET all the categories', () => {
    it('returns all the categories', () =>
      request(app)
        .get('/api/categories')
        .then(res => {
          expect(res.body.length).to.equal(2);
          expect(res.body[0]).to.contain(utilCategory);
        })
      );
  });

  describe('GET a single categories', () => {

    //*TODO models/categoryModel.tests breaks this, WHY???!!!!
    // This route no longer exist
    xit('returns one category', () =>
      request(app)
        .get('/api/categories/1')
        .then(res => {
          expect(res.body.name).to.equal('Utility');
        })
      );
  });

  describe('POST a new category', () => {
    it('adds a new category', () =>
      request(app)
        .post('/api/categories/addCategory')
        .send({ name: 'decorative' })
        .then(res => {
          expect(res.body).to.contain({ name: 'decorative' });
        })
      );
  });

  describe('PUT', () => {

    //*TODO models/categoryModel.tests breaks this, WHY???!!!!

    xit('edits a category', () =>
      request(app)
        .put('/api/categories/edit/1')
        .send({ name: 'decorative' })
        .then(res => {
          expect(res.body).to.contain({ name: 'decorative' });
        })
      );
  });

});
