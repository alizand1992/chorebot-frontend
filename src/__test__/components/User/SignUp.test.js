import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignUp from '../../../components/User/SignUp';
import { Button } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('User -> Sign Up', () => {
  describe('without values', () => {
    const wrapper = shallow(<SignUp />);

    it('renders a form element', () => {
      expect(wrapper.find('form')).toHaveLength(1);
    });

    it('has an `screen-name` input', () => {
      expect(wrapper.find({ id: 'screen-name' })).toHaveLength(1);
    });

    it('has an `email` input', () => {
      expect(wrapper.find({ id: 'email' })).toHaveLength(1);
    });

    it('has a `password` input', () => {
      expect(wrapper.find({ id: 'password' })).toHaveLength(1);
    });

    it('has a `confirm-password` input', () => {
      expect(wrapper.find({ id: 'confirm-password' })).toHaveLength(1);
    });

    it('has a save button', () => {
      expect(wrapper.find(Button)).toHaveLength(1);
      expect(wrapper.find(Button).text()).toBe('Sign Up');
    });

    describe('onChange of fields', () => {
      it('updates the state for screen-name', () => {
        wrapper.find({ id: 'screen-name' })
          .simulate('change', { target: { value: 'John Smith' } });

        expect(wrapper.state().data.screenName).toBe('John Smith');
      });

      it('updates the state for email', () => {
        wrapper.find({ id: 'email' })
          .simulate('change', { target: { value: 'test@test.com' } });

        expect(wrapper.state().data.email).toBe('test@test.com');
      });

      it('updates the state for password', () => {
        wrapper.find({ id: 'password' })
          .simulate('change', { target: { value: 'password' } });

        expect(wrapper.state().data.password).toBe('password');
      });

      it('updates the state for confirmPassword', () => {
        wrapper.find({ id: 'confirm-password' })
          .simulate('change', { target: { value: 'confirm password' } });

        expect(wrapper.state().data.confirmPassword).toBe('confirm password');
      });
    });
  });

  describe('with props', () => {
    const wrapper = shallow(<SignUp email="john.smith@gmail.com" password="password123" confirmPassword="password123" />);

    it('puts email prop in email field', () => {
      expect(wrapper.find({ id: 'email' }).prop('value')).toBe('john.smith@gmail.com');
    });

    it('puts password prop in password field', () => {
      expect(wrapper.find({ id: 'password' }).prop('value')).toBe('password123');
    });
  });
});