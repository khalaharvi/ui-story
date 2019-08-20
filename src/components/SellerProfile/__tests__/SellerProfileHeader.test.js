import React from 'react';
import { shallow } from 'enzyme';

import SellerProfileHeader from '../SellerProfileHeader';

describe('<SellerProfileHeader />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SellerProfileHeader name="Name" location="Location" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with website', () => {
    const wrapper = shallow(
      <SellerProfileHeader name="Name" location="Location" website="https://deringhall.com" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
