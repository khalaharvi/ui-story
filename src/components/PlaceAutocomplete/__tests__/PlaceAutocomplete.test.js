import React from 'react';
import { shallowWithTheme } from 'utils/testing';

import PlaceAutocomplete from '../PlaceAutocomplete';

describe('<PlaceAutocomplete />', () => {
  it('renders correctly', () => {
    const wrapper = shallowWithTheme(<PlaceAutocomplete />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom placeholder', () => {
    const wrapper = shallowWithTheme(<PlaceAutocomplete placeholder="From..." />);

    expect(wrapper).toMatchSnapshot();
  });
});
