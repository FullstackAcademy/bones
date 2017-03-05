import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'

import WhoAmIContainer, {WhoAmI} from './WhoAmI'

describe('<WhoAmI/>', () => {
  const user = {
    name: 'Dr. Bones',
  }
  const logout = spy()
  let rootEl
  beforeEach('render the root', () => {
    rootEl = shallow(<WhoAmI user={user} logout={logout} />)
  })

  it('greets the user', () => {
    expect(rootEl.text()).to.contain(user.name)
  })

  it('has a logout button', () => {
    expect(rootEl.find('button.logout')).to.have.length(1)
  })

  it('calls props.logout when logout is tapped', () => {
    rootEl.find('button.logout').simulate('click')
    expect(logout).to.have.been.called // eslint-disable-line no-unused-expressions
  })
})

describe("<WhoAmI/>'s connection", () => {
  const state = {
    auth: {name: 'Dr. Bones'}
  }

  let rootEl, store
  beforeEach('create store and render the root', () => {
    store = createStore(prevState => prevState, state)
    rootEl = shallow(<WhoAmIContainer store={store} />)
  })

  it('gets prop.user from state.auth', () => {
    expect(rootEl.find(WhoAmI)).to.have.prop('user').eql(state.auth)
  })
})
