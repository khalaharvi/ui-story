import React from 'react';
import { shallow } from 'enzyme';

import CommerceModuleHeader from '../CommerceModuleHeader';

describe('<CommerceModuleHeader />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CommerceModuleHeader
        productName="Product Name"
        brandName="Brand Name"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
