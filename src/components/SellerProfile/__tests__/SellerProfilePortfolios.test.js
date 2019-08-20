import React from 'react';
import { shallow } from 'enzyme';

import SellerProfilePortfolios from '../SellerProfilePortfolios';

const portfolios = [
  {
    id: 1,
    image: 'https://cdn.deringhall.com/portfolio_image/image/heather.wells.inc.portfolio.interiors.family.room.1501108236.5191004.jpg?auto=format&fit=clip&q=60&w=670',
    caption: 'Caption'
  },
  {
    id: 2,
    image: 'https://cdn.deringhall.com/portfolio_image/image/heather.wells.inc.portfolio.interiors.family.room.1501108239.2473252.jpg?auto=format&fit=clip&q=60&w=670',
    caption: 'Caption'
  },
  {
    id: 3,
    image: 'https://cdn.deringhall.com/portfolio_image/image/heather.wells.inc.portfolio.interiors.outdoor.room.1491576804.5543432.jpg?auto=format&fit=clip&q=60&w=670',
    caption: 'Caption'
  },
  {
    id: 4,
    image: 'https://cdn.deringhall.com/portfolio_image/image/heather.wells.inc.portfolio.interiors.kitchen.1491576661.6619911.jpg?auto=format&fit=clip&q=60&w=670',
    caption: 'Caption'
  },
  {
    id: 5,
    image: 'https://cdn.deringhall.com/portfolio_image/image/heather.wells.inc.portfolio.interiors.living.1491576648.5075328.jpg?auto=format&fit=clip&q=60&w=670',
    caption: 'Caption'
  },
  {
    id: 6,
    image: 'https://cdn.deringhall.com/portfolio_image/image/heather.wells.inc.portfolio.interiors.foyer.1501108239.790634.jpg?auto=format&fit=clip&q=60&w=670',
    caption: 'Caption'
  },
  {
    id: 7,
    image: 'https://cdn.deringhall.com/portfolio_image/image/heather.wells.inc.portfolio.interiors.outdoor.room.1491576575.5107028.jpg?auto=format&fit=clip&q=60&w=670',
    caption: 'Caption'
  }
];

describe('<SellerProfilePortfolios />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SellerProfilePortfolios portfolios={portfolios} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with portfolioComponent', () => {
    const wrapper = shallow(
      <SellerProfilePortfolios
        portfolios={portfolios}
        portfolioComponent={({ portfolio }) => <p>{portfolio.caption}</p>}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
