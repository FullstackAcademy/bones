import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme'))
import {shallow} from 'enzyme'

import {Cart} from './Cart'

describe('<Cart />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Cart/>)
  )

  // it('shows a h1 tags', () => {
  //   console.log("ROOTTT", root);
  //   expect(root.find("h1")).to.have.length(1)
  // })


})