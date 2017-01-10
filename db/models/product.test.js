'use strict'

const db = require('APP/db')
const User = require('./user')
const {expect} = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.didSync)

  describe('product tests', () => {

    it('resolves true if the password matches', () => {

	})

    it('product test two', () => {
    //   Product.create({ password: 'ok' })
    //     .then(user => user.authenticate('not ok'))
    //     .then(result => expect(result).to.be.false)
	})

  })
})
