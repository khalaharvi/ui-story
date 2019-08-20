import React from 'react';
import { shallow } from 'enzyme';

import PlaceAutocompleteSuggestion from '../PlaceAutocompleteSuggestion';

describe('<PlaceAutocompleteSuggestion />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <PlaceAutocompleteSuggestion
        place={{
          name: 'New York, NY'
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
