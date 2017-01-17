const app = require('APP/server/start');
const db = require('APP/db');
const User = require('APP/db/models/user');
const request = require('supertest-as-promised');
const {expect} = require('chai');

describe('/api/users', () => {
  describe('when not logged in', () => {
    it('GET /:id fails 401 (Unauthorized)', () =>
      request(app)
        .get(`/api/users/1`)
        .expect(401)
    );

    it('POST creates a user', () =>
      request(app)
        .post('/api/users')
        .send({
          firstName: 'Beth',
          lastName: 'Secret',
          email: 'beth@secrets.org',
          password: '12345'
        })
        .expect(201)
    );

    it('POST redirects to the user it just made', () =>
      request(app)
        .post('/api/users')
        .send({
          firstName: 'Eve',
          lastName: 'Interloper',
          email: 'eve@interloper.com',
          password: '23456',
        })
        .redirects(1)
        .then(res => expect(res.body).to.contain({
          email: 'eve@interloper.com'
        }))
    );
  });
});
