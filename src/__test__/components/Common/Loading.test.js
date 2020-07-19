import React from 'react';

import { CircularProgress, Container } from '@material-ui/core';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loading from '../../../components/Common/Loading';

configure({ adapter: new Adapter() });

describe('Loading', () => {
  const wrapper = shallow(<Loading />);

  it('It has a container', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('It has a CircularProgress', () => {
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });
});