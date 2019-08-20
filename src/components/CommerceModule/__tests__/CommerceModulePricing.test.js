import React from 'react';
import { shallow } from 'enzyme';

import CommerceModulePricing from '../CommerceModulePricing';

describe('<CommerceModulePricing />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CommerceModulePricing
        price="Price on Request"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with priceRaw', () => {
    const wrapper = shallow(
      <CommerceModulePricing
        price="$1,000"
        priceRaw={1000}
        currency="USD"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
