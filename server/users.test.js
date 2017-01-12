const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

describe.only('/api/users', () => {
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
      // .redirects(1)
      .then(res => {
        console.log("res from users.test", res.body)
        expect(res.body).to.contain({userName: 'Storm'})
      })
    })    
  })


})
