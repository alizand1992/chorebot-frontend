import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import { HashRouter as Router } from 'react-router-dom';
import TopMenu from '../components/TopMenu';

configure({ adapter: new Adapter() });

describe('App', () => {
  const wrapper = shallow(<App />);

  it('has a Router component', () => {
    expect(wrapper.find(Router)).toHaveLength(1);
  });

  it('has a TopMenu', () => {
    expect(wrapper.find(TopMenu)).toHaveLength(1);
  });

  it('has a Route to sign in page', () => {
    expect(wrapper.find({ path: '/user/sign_in' })).toHaveLength(1);
  });

  it('has a Route to sign up page', () => {
    expect(wrapper.find({ path: '/user/sign_up' })).toHaveLength(1);
  });
});