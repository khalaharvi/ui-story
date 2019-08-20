import React from 'react';
import { shallow } from 'enzyme';

import PoweredBy from '../PoweredBy';

describe('<PoweredBy />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PoweredBy />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom to prop', () => {
    const wrapper = shallow(<PoweredBy to="https://encrypted.google.com" />);
    expect(wrapper).toMatchSnapshot();
  });
});
