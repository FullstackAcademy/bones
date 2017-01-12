const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

describe.only('/api/users', () => {
  before('wait for the db', () => db.didSync)
  after('synchronize and clear database', () => db.sync({force: true}));

  describe('when not logged in', () => {
    it('GET /:id fails 401 (Unauthorized)', () =>
      request(app)
        .get(`/api/users/1`)
        .expect(401)
    )

    it('POST creates a user', () =>
      request(app)
        .post('/api/users')
        .send({
          userName: 'Beth',
          email: 'beth@secrets.org',
          password: '12345'
        })
        .expect(201)
    )

    it('POST redirects to the user it just made', () =>
      request(app)
        .post('/api/users')
        .send({userName: 'eve',
          email: 'eve@interloper.com',
          password: '23456',
        })
        .redirects(1)
        .then(res => expect(res.body).to.contain({
          email: 'eve@interloper.com'
        }))
    )
  })

  describe('when logged in', () => {
   

    it('PUT updates a user', () => {
      return request(app)
      .put(`/api/users/1`)
      .send({
        userName: 'Storm'
      })
      .then(res => {
        expect(res.body).to.contain({userName: 'Storm'})
      })
    })    
  })

describe('deletes a user', () => {
  it('deletes a user', () => {
    return request(app)
    .delete(`/api/users/2`)
    .send()
    .then(res => {
      expect(res.status).to.equal(204)
      })
    })
  })
})