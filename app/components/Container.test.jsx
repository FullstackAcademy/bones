import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme'))
import {shallow, mount, render} from 'enzyme'

import {Container} from './Container'

describe('<Container />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Container/>)
  )

  it('Has nav element', () => {
    expect(root.find('nav')).to.exist
  })

  it('Has footer element', () => {
    expect(root.find('footer')).to.exist
  })

  it('main menu has four items', () => {
    expect(root.find('#main-menu li')).to.have.length(4)
  })
})
