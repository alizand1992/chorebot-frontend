import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from '../../../components/Task/Form';
import { Button } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('Task -> Form', () => {
  describe('without values', () => {
    const wrapper = shallow(<Form />);

    it('renders a form element', () => {
      expect(wrapper.find('form')).toHaveLength(1);
    });

    it('has a `name` input', () => {
      expect(wrapper.find({ id: 'name' })).toHaveLength(1);
    });

    it('has a `description` input', () => {
      expect(wrapper.find({ id: 'description' })).toHaveLength(1);
    });

    it('has a `level-of-effort` input', () => {
      expect(wrapper.find({ id: 'level-of-effort' })).toHaveLength(1);
    });

    it('has a save button', () => {
      expect(wrapper.find(Button)).toHaveLength(1);
      expect(wrapper.find(Button).text()).toBe('Save');
    });

    describe('onChange of fields', () => {
      it('updates the state for email', () => {
        wrapper.find({id: 'name'})
          .simulate('change', { target: { value: 'Taking out the garbage' } });

        expect(wrapper.state().data.name).toBe('Taking out the garbage');
      });

      it('updates the state for email', () => {
        wrapper.find({id: 'description'})
          .simulate('change', { target: {
            value: 'This requires taking picking it up and taking it all the way to the cans.'
          } });

        expect(wrapper.state().data.description)
          .toBe('This requires taking picking it up and taking it all the way to the cans.');
      });

      it('has a `level-of-effort` input', () => {
        wrapper.find({id: 'level-of-effort'})
          .simulate('change', { target: { value: '5' } });

        expect(wrapper.state().data.levelOfEffort).toBe('5');
      });
    });
  });

  describe('with props', () => {
    const wrapper = shallow(<Form name="Task Name" description="Task Description" levelOfEffort="12" />);

    it('puts name prop in name field', () => {
      expect(wrapper.find({ id: 'name' }).prop('value')).toBe('Task Name');
    });

    it('puts description prop in description field', () => {
      expect(wrapper.find({ id: 'description' }).prop('value')).toBe('Task Description');
    });

    it('puts levelOfEffort prop in levelOfEffort field', () => {
      expect(wrapper.find({ id: 'level-of-effort' }).prop('value')).toBe('12');
    });
  })
});