'use strict';

const db = require('APP/db');
const User = require('./user');
const {expect} = require('chai');

describe('User', () => {
  before('wait for the db', () => db.didSync);

  let user;
  beforeEach(() => {
    user = User.build({
      firstName: 'Reico',
      lastName: 'Lee',
      password: 'ok',
      phoneNumber: '555.555.5555'
    });
  });

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () =>
      user.save()
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true));

    it("resolves false if the password doesn't match", () =>
      user.save()
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false));
  });

  describe('Has a first, last name and phone number', () => {
    it('First Name', () => {
      return user.save()
        .then(user => expect(user.firstName).to.equal('Reico'));
    });

    it('Last Name', () => {
      return user.save()
        .then(user => expect(user.lastName).to.equal('Lee'));
    });

    it('Phone Number', () => {
      return user.save()
        .then(user => expect(user.phoneNumber).to.equal('555.555.5555'));
    });
  });
});
