'use strict'

const db = require('APP/db')
const Inventory = require('./inventory')
const Product = require('./product')
const {expect} = require('chai')

describe('Inventory', () => {
  before('wait for the db', () => db.didSync)


  const PokemonXS = {
    size: 'XS',
    quantity: 50
  }
  const PokemonS = {
    size: 'S',
    quantity: 70
  }
  const PokemonM = {
    size: 'M',
    quantity: 40
  }
  const PokemonSuit = {
    name: 'Pokemon Dog Costume',
    description: 'Cute, soft, yellow for your pup.',
    price: '30.00',
    imageURL:'wYu7cQs.jpg',
    tags: ['pokemon', 'dog'],
    inventories: [PokemonXS, PokemonS, PokemonM]
  }

  describe('created inventory successfully added to data base', () => {
      it("has size and quantity", () =>
          Product.create(PokemonSuit,{
          include: [Inventory]
         })
          .then(createdProduct =>{
            console.log(createdProduct.get())
            expect(createdProduct.inventories[0].get().size).to.deep.equal(PokemonXS.size)
            expect(createdProduct.inventories[1].get().size).to.deep.equal(PokemonS.size)
            expect(createdProduct.inventories[2].get().size).to.deep.equal(PokemonM.size)
            expect(createdProduct.inventories[0].get().quantity).to.deep.equal(PokemonXS.quantity)
            expect(createdProduct.inventories[1].get().quantity).to.deep.equal(PokemonS.quantity)
            expect(createdProduct.inventories[2].get().quantity).to.deep.equal(PokemonM.quantity)
          })
      )
  })
})
