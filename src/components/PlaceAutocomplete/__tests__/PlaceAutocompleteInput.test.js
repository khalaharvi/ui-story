import React from 'react';
import { shallow } from 'enzyme';

import PlaceAutocompleteInput from '../PlaceAutocompleteInput';

describe('<PlaceAutocompleteInput />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PlaceAutocompleteInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
