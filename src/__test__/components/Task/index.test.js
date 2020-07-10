import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Task from '../../../components/Task';

configure({ adapter: new Adapter() });

describe('Task -> index (card)', () => {
  const wrapper = shallow(<Task name="Task Name" description="Task Description" />)

  it('is in a card', () => {
    expect(wrapper.find(Card)).toHaveLength(1);
  });

  describe('in CardContent', () => {
    it('shows name', () => {
      expect(wrapper.find(CardContent).text()).toContain('Name: Task Name');
    });

    it('shows description', () => {
      expect(wrapper.find(CardContent).text()).toContain('Description: Task Description');
    });

    it('shows difficulty and defaults to 1', () => {
      expect(wrapper.find(CardContent).text()).toContain('Difficulty: 1');
    });
  });
});