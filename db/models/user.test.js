'use strict'

const db = require('APP/db')
const User = require('./user')
const {expect} = require('chai')

describe('User', () => {

  before('wait for the db', () => db.didSync)

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true))

    it("resolves false if the password doesn't match", () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false))
	})

	it('has an email', () =>
      User.create({
		  password: 'ok',
		  userName: 'joeyusername',
		  email: 'tester99@gmail.com'
		})
        .then(user => expect(user.email).to.exist)
	)

	it('requires an email', () =>
      User.create({
		  password: 'ok',
		  email: 'tester33@gmail.com'
		})
        .then(user => expect(user).to.not.exist)
		.catch( (err) => expect(err).to.exist)
	)


	it('has a unique email', () => {

		const user1Promise = User.create({
			password: 'ok',
			email: 'tester13@gmail.com',
			userName: 'smurfBalls'
		})
		const user2Promise = User.create({
			password: 'ok',
			email: 'tester13@gmail.com',
			userName: 'smurfBallsTheBrother'
		})

		Promise.all(user1Promise, user2Promise)
		.then( resultsArray => expect(resultsArray.length).to.equal(1))
		.catch( (err) => expect(err).to.exist);

	})


	it('has a userName', () =>  // work on model
	User.create({
		password: 'ok',
		email: 'tester1@gmail.com',
		userName: 'smurfBalls'
	  })
	  .then(user => expect(user.userName).to.exist)
	  .catch( console.error)
	)

	it("has a password", () =>
	User.create({
		password: 'ok',
		email: 'tester24@gmail.com',
		userName: 'smurfBalls2'
	  })
	  .then(user => expect(user.password).to.exist)
	  .catch( console.error)
	)

})
