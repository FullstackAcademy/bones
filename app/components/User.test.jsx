import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme'))
import {shallow} from 'enzyme'

import {User} from './User'

describe('<User />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<User/>)
  )

  // it('shows a h1 tags', () => {
  //   console.log("ROOTTT", root);
  //   expect(root.find("h1")).to.have.length(1)
  // })


})