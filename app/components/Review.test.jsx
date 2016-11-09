import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme'))
import {shallow} from 'enzyme'
import IconButton from 'material-ui/IconButton';
import Review from './Review'

describe('<Review />', () => {

  let review, starButton;
  beforeEach('render the review component', () =>
    review = shallow(<Review />)
    starButton = shallow(<IconButton name="two-star"/>)
  )

  it('has a place to enter text', () => {
    expect(review.find("textarea")).to.have.length(1)
  })

  it('has a submit button', () => {
    expect(review.find("button[type='submit']")).to.have.length(1);
  })

  it('has a default state of 0 stars', () => {
    expect(review.state().stars).to.equal(0)
  })

  it('has a default state where text is an empty string', () => {
    expect(review.state().text).to.equal("")
  })

  it('updates state on text change', () => {
    review.find("textarea").simulate('change',{target: {value: 'This is some new text'}})
    expect(review.state().text).to.equal('This is some new text')
  })

})

