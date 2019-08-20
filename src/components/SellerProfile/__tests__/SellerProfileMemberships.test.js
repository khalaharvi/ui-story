import React from 'react';
import { shallow } from 'enzyme';

import SellerProfileMemberships from '../SellerProfileMemberships';

const memberships = [
  {
    id: 1,
    name: 'A-List',
    image: 'https://cdn.deringhall.com/user/logo/bb82f493-9f8a-4df2-81db-068e357dc20b_miyuki.logo.color.transparent.web.png?auto=format&fit=max&h=170&q=60&w=170'
  },
  {
    id: 2,
    name: 'B-List',
    image: 'https://cdn.deringhall.com/user/logo/bb82f493-9f8a-4df2-81db-068e357dc20b_miyuki.logo.color.transparent.web.png?auto=format&fit=max&h=170&q=60&w=170'
  }
];

describe('<SellerProfileMemberships />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SellerProfileMemberships memberships={memberships} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
