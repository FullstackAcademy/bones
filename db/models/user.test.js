'use strict'

const db = require('APP/db')
const User = require('./user')
const {expect} = require('chai')

describe('User', () => {

  before('wait for the db', () => db.didSync)

  describe('authenticate(plaintext: String) ~> Boolean', () => {

    it('resolves true if the password matches', () =>
      User.create({
		  password: 'ok',
		  userName: 'jessieG',
		  email: 'jessig@gmail.com'
	   })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true)
	)

    it("resolves false if the password doesn't match", () =>
      User.create({
			password: 'ok',
			userName: 'bsg',
			email: 'bubbaShrimp@gump.com'
		 })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false)
	)
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
			userName: 'smurfBallsHoney'
		})
		const user2Promise = User.create({
			password: 'ok',
			email: 'tester156@gmail.com',
			userName: 'smurfBallsTheBrother'
		})

		Promise.all(user1Promise, user2Promise)
		.then( resultsArray => expect(resultsArray.length).to.equal(1))
		.catch(result => expect(result).to.be.an.instanceOf(Error))

	})


	it('has a userName', () =>  // work on model
	User.create({
		password: 'ok',
		email: 'tester1@gmail.com',
		userName: 'smurfBalls1'
	  })
	  .then(user => expect(user.userName).to.exist)
	  .catch( console.error)
	)

	it('requires a username', () => {
	  return User.create({
		  password: 'ok',
		  email: 'tester99@gmail.com'
		})
		.then(user => expect(user).to.not.exist)
		.catch(result => expect(result).to.be.an.instanceOf(Error))
	})

	it('has a password', () => {
	return User.create({
		password: 'ok',
		email: 'tester24@gmail.com',
		userName: 'smurfBalls2'
	  })
	  .then(user => expect(user.password).to.exist)
	  .catch( console.error)
  })

	it('requires a password', () =>
	  User.create({
		  email: '21@gmail.com',
		  userName: 'smurfDaddy'
		})
		.then(user => expect(user).to.not.exist)
		.catch(result => expect(result).to.be.an.instanceOf(Error))
	)

})
