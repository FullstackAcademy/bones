const db = require('APP/db');
const { expect } = require('chai');
const app = require('APP/server/start');
const Tag = require('APP/db/models/tag');
const request = require('supertest-as-promised');

const tagOne = {
  name: 'sexy'
};

const tagTwo = {
  name: 'friendly'
};

describe('/api/tags', () => {

  before('create a tag', () =>
    db.didSync
      .then(() => Tag.create(tagOne))
      .then(() => Tag.create(tagTwo))
  );

  describe('GET', () => {
    it('returns all the tags', () =>
      request(app)
        .get('/api/tags')
        .then(res => {
          expect(res.body.length).to.equal(2);
          res.body.forEach(tag => expect(typeof tag.name).to.be.string);
        })
    );
  });

  describe('GET', () => {
    it('returns one tag', () =>
      request(app)
        .get('/api/tags/1')
        .then(res => {
          expect(res.body.name).to.equal('sexy');
        })
      );
  });

  describe('POST', () => {
    it('creates a new tag', () =>
      request(app)
        .post('/api/tags/addTag')
        .send({ name: 'smooth like a baby\'s bottom' })
        .then(res => {
          expect(res.body).to.contain({ name: 'smooth like a baby\'s bottom' });
        })
      );
  });

  describe('PUT', () => {
    it('edits a tag', () =>
      request(app)
        .put('/api/tags/edit/1')
        .send({ name: 'chris' })
        .then(res => {
          expect(res.body).to.contain({ name: 'chris' });
        })
      );
  });

});
