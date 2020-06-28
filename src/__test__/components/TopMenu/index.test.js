import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TopMenu from '../../../components/TopMenu';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('TopMenu', () => {
  const wrapper = shallow(<TopMenu />);

  it('renders an AppBar', () => {
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });

  it('renders the first Typography with text Chore Bot', () => {
    expect(wrapper.find(Typography).first().html()).toContain('Chore Bot');
  });
});