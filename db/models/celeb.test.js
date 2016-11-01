'use strict'

const db = require('APP/db')
const Celeb = require('./celeb')
const {expect} = require('chai')

describe('Celeb', () => {
  before('wait for the db', () => db.didSync)

    it('creates new celeb in database', () =>
      Celeb.create({ name: 'Famous Living Dude',
                   celebType: 'rich dude',
                   list: 'C',
                   rarity: 12,
                      alive: true})
        .then(celeb => {
              expect(celeb).to.contain({ name: 'Famous Living Dude',
                   celebType: 'rich dude',
                   list: 'C',
                   rarity: 12,
                  alive: true})
        })
      )
    describe('schema definitions', () => {
      it('has a name', () => {
            expect(Celeb.attributes.name).to.be.an('object');
        });
      it('has a celebType', () => {
            expect(Celeb.attributes.celebType).to.be.an('object');
        });
      it('has a list attribute', () => {
            expect(Celeb.attributes.list).to.be.an('object');
        });
      it('has an alive status', () => {
            expect(Celeb.attributes.alive).to.be.an('object');
        });
    })
    describe('validations', () => {
      it('wont create a celeb without a name', () =>
        Celeb.create({
                     celebType: 'rich dude',
                     list: 'C',
                     rarity: 12,
                        alive: true})
          .then(celeb => console.log('this should not print'))
          .catch(function (err) {
            expect(err.name).to.be.equal('SequelizeValidationError');
          })
        )

      it('wont create a celeb without a living status', () =>
        Celeb.create({ name: 'Famous Living Dude',
                     celebType: 'rich dude',
                     list: 'C',
                     rarity: 12})
          .then(celeb => console.log('this should not print'))
          .catch(function (err) {
            expect(err.name).to.be.equal('SequelizeValidationError');
          })
        )

      it('wont create a celeb without a non boolean living status', () =>
        Celeb.create({ name: 'Famous Living Dude',
                     celebType: 'rich dude',
                     list: 'C',
                     rarity: 12,
                     alive: 'cool'
                  })
          .then(celeb => console.log(celeb))
          .catch(function (err) {
            expect(err.name).to.be.equal('SequelizeDatabaseError')
          })
      )
    })
})

