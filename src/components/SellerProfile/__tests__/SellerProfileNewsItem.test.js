import React from 'react';
import { shallow } from 'enzyme';

import SellerProfileNewsItem from '../SellerProfileNewsItem';

describe('<SellerProfileNewsItem />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SellerProfileNewsItem news={{
          id: 1,
          image: 'https://cdn.deringhall.com/images/681/original/cover.jpg?auto=format&fit=max&q=60&w=670',
          title: 'Remote Possibilities',
          type: 'Press'
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
