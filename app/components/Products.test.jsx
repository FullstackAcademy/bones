import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme'))
import {shallow, mount, render} from 'enzyme'

import {Products} from './Products'

describe('<Products />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Products/>)
  )

  it('Displays a welcome header', () => {
    expect(root.find('h2')).to.have.length(1)
  })

  it('displays a table with five columns on it', () => {
    expect(root.find('table[type="productsList"]')).to.have.length(1)
  })
})