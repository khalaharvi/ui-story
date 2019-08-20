import React from 'react';
import { shallow } from 'enzyme';

import { SearchHeading } from '../SearchHeading';

describe('<SearchHeading />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchHeading searchState={{}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with defaultHeading', () => {
    const wrapper = shallow(<SearchHeading searchState={{}} defaultHeading="Furnishings" />);
    expect(wrapper).toMatchSnapshot();
  });
});
