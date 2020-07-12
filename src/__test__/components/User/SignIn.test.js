import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignIn from '../../../components/User/SignIn';
import { Button } from '@material-ui/core';
import Form from '../../../components/Task/Form';

configure({ adapter: new Adapter() });

describe('User -> Sign In', () => {
  describe('without values', () => {
    const wrapper = shallow(<SignIn/>);

    it('renders a form element', () => {
      expect(wrapper.find('form')).toHaveLength(1);
    });

    it('has an `email` input', () => {
      expect(wrapper.find({id: 'email'})).toHaveLength(1);
    });

    it('has a `password` input', () => {
      expect(wrapper.find({id: 'password'})).toHaveLength(1);
    });

    it('has a save button', () => {
      expect(wrapper.find(Button)).toHaveLength(1);
      expect(wrapper.find(Button).text()).toBe('Sign In');
    });

    describe('onChange of fields', () => {
      it('updates the state for email', () => {
        wrapper.find({id: 'email'})
          .simulate('change', { target: { value: 'test@test.com' } });

        expect(wrapper.state().data.email).toBe('test@test.com');
      });

      it('updates the state for email', () => {
        wrapper.find({id: 'password'})
          .simulate('change', { target: { value: 'password' } });

        expect(wrapper.state().data.password).toBe('password');
      });
    });
  });

  describe('with props', () => {
    const wrapper = shallow(<SignIn email="john.smith@gmail.com" password="password123"/>);

    it('puts email prop in email field', () => {
      expect(wrapper.find({ id: 'email' }).prop('value')).toBe('john.smith@gmail.com');
    });

    it('puts password prop in password field', () => {
      expect(wrapper.find({ id: 'password' }).prop('value')).toBe('password123');
    });
  });
});