import React from 'react';
import { shallow } from 'enzyme';

import withGoogleMapScript from '../withGoogleMapScript';

describe('withGoogleMapScript HOC', () => {
  it('renders correctly', () => {
    const WithGoogleMapScript = withGoogleMapScript('')(<span>Loaded with Google Map Script!</span>);

    const wrapper = shallow(
      <WithGoogleMapScript
        loadingElement={<span>Loading...</span>}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
