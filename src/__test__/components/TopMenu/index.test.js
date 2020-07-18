import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Link } from 'react-router-dom';
import { AppBar, IconButton, Menu, Typography } from '@material-ui/core';

import TopMenu from '../../../components/TopMenu';

configure({ adapter: new Adapter() });

describe('TopMenu', () => {
  const wrapper = shallow(<TopMenu />);

  it('renders an AppBar', () => {
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });

  it('renders the first Typography with text Chore Bot', () => {
    expect(wrapper.find(Typography).first().html()).toContain('Chore Bot');
  });

  describe('User Menu', () => {
    it('has an account_circle element', () => {
      expect(wrapper.find('section', IconButton, 'i.material-icons').text()).toBe('account_circle')
    });

    it('has a menu', () => {
      expect(wrapper.find(Menu)).toHaveLength(1);
    });

    it('controls the dropdown menu', () => {
      expect(wrapper.find('section', IconButton).children().first().props()['aria-controls']).toBe('user-menu');
      expect(wrapper.find(Menu).props().id).toBe('user-menu');
    });

    describe('Sign In', () => {
      it('has a link to /user/sign_in as its first link', () => {
        expect(wrapper.find(Link).first().props().to).toBe('/user/sign_in');
      });

      it('has the text Sign In', () => {
        expect(wrapper.find(Link).first().text()).toBe('Sign In');
      });
    });

    describe('Sign Up',  () => {
      it('has a link to /user/sign_up as its last link', () => {
        expect(wrapper.find(Link).last().props().to).toBe('/user/sign_up');
      });

      it('has the text Sign Up', () => {
        expect(wrapper.find(Link).last().text()).toBe('Sign Up');
      });
    });
  });
});