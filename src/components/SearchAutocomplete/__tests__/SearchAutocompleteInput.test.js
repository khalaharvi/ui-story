import React from 'react';
import { shallow } from 'enzyme';

import SearchAutocompleteInput from '../SearchAutocompleteInput';

describe('<SearchAutocompleteInput />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchAutocompleteInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
