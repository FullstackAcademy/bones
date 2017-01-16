import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

import User from '../components/User'

describe('User component', () => {

	let onLoginSpy, slider;

	beforeEach('Create user and spy', () => {
		onLoginSpy = spy();
		slider = shallow(<User onChange={onLoginSpy} />)
	})

	it('user can edit account details', () => {
		let el = slider.get(0);
		expect(el.props.min).to.be.equal('0')
		expect(el.props.max).to.be.equal('255')
	})

	it('user can log out', () => {
		slider.simulate('change', { target : {value : 5}});
		expect(onChangeSpy.called).to.be.true
	})
})
