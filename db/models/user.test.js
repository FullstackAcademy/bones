'use strict'

const db = require('APP/db')
const User = require('./user')
const {expect} = require('chai')

describe('User', () => {
  before('wait for the db', () => db.didSync)

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () =>
      User.create({ firstName: 'kat', lastName: 'guthrie', password: 'ok' })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true))

    it("resolves false if the password doesn't match", () =>
      User.create({ firstName: 'kat', lastName: 'guthrie', password: 'ok' })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false))

    it("has email, firstName, lastName, userName, password, and isAdmin fields", () =>
      User.create({email: 'kat@kat.com', firstName: 'Kat', lastName: 'Guthrie', username: 'katzelein', password: 'OK', isAdmin: true})
        .then(user => { 
          expect(user).to.have.property('email');
          expect(user).to.have.property('firstName');
          expect(user).to.have.property('lastName');
          expect(user).to.have.property('username');
          expect(user).to.have.property('password');
          expect(user).to.have.property('isAdmin');
        }))
  })
})