const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

describe('/api/users', () => {
  describe('when not logged in', () => {
    // it('GET /:id fails 401 (Unauthorized)', () =>
    //   request(app)
    //     .get(`/api/users/1`)
    //     .expect(401)
    //     //tmp change it
    // )

    it('POST creates a user', () =>
      request(app)
        .post('/api/users')
        .send({
          email: 'beth@secrets.org',
          password: '12345',
          firstName: 'beth',
          lastName: 'phillips'
        })
        .expect(201)
    )

    it('POST returns the user it just made', () =>
      request(app)
        .post('/api/users')
        .send({
          email: 'eve@interloper.com',
          password: '23456',
          firstName: 'eve',
          lastName: 'summers'
        })
        .then(res => expect(res.body).to.contain({
          email: 'eve@interloper.com'
        }))
    )
  })
})