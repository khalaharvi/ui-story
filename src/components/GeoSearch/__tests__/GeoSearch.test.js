import React from 'react';
import { shallow } from 'enzyme';

import { GeoSearch } from '../GeoSearch';

// TO DO: add more tests
describe('<GeoSearch />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GeoSearch refine={() => null} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom classname', () => {
    const wrapper = shallow(<GeoSearch refine={() => null} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with radiuses', () => {
    const radiuses = [{
      label: 'Within 1 miles',
      value: 1
    },
    {
      label: 'Within 2 miles',
      value: 2
    },
    {
      label: 'Within 3 miles',
      value: 3
    }];
    const wrapper = shallow(<GeoSearch refine={() => null} radiuses={radiuses} />);

    expect(wrapper).toMatchSnapshot();
  });

  // should call refine when onPlaceSelected
  // should call refine when onChange
  // should be disabled when not refined
});
