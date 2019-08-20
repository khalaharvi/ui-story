import React from 'react';
import { shallow } from 'enzyme';

import SellerProfilePortfolio from '../SellerProfilePortfolio';

describe('<SellerProfilePortfolio />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SellerProfilePortfolio portfolio={{
          id: 1,
          image: 'https://cdn.deringhall.com/portfolio_image/image/heather.wells.inc.portfolio.interiors.kitchen.1491576661.6619911.jpg?auto=format&fit=clip&q=60&w=670',
          caption: 'Caption'
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
