import React from 'react';
import { storiesOf } from '@storybook/react';

import SellerProfileTemplate from 'templates/SellerProfile';
import {
  SellerProfileHeader,
  SellerProfileInfo,
  SellerProfilePortfolios,
  SellerProfileMemberships,
  SellerProfileNews
} from 'components/SellerProfile';
import { withTests } from './utils';

const seller = {
  name: 'Catlin Design',
  location: 'Jacksonville, CA',
  image: 'https://cdn.deringhall.com/seller/primary_image/03dd84b2-2f99-40e3-9013-8158f4f1f542_riverbirch.00092..hdr.jpg?auto=format&fit=max&h=531&q=60&w=1170',
  logo: 'https://cdn.deringhall.com/user/logo/bb82f493-9f8a-4df2-81db-068e357dc20b_miyuki.logo.color.transparent.web.png?auto=format&fit=max&h=170&q=60&w=170',
  website: 'https://encrypted.google.com',
  summary: `
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi veritatis reiciendis itaque, vel iusto suscipit, illo in accusantium nulla dignissimos est mollitia ea eius dolores laborum libero aut, corporis ipsam.</p>
  `
};

const memberships = [
  {
    id: 1,
    name: 'A-List',
    image: 'https://cdn.deringhall.com/user/logo/bb82f493-9f8a-4df2-81db-068e357dc20b_miyuki.logo.color.transparent.web.png?auto=format&fit=max&h=170&q=60&w=170'
  }
];

const links = [
  {
    type: 'website',
    url: 'https://deringhall.com',
    label: 'Official Website'
  },
  {
    type: 'facebook',
    url: 'https://facebook.com'
  },
  {
    type: 'twitter',
    url: 'https://twitter.com'
  },
  {
    type: 'pinterest',
    url: 'https://pinterest.com'
  },
  {
    type: 'instagram',
    url: 'https://instagram.com'
  }
];

const portfolios = [{
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
}];

const news = [
  {
    id: 1,
    image: 'https://cdn.deringhall.com/announcement/image/aa327cae-518b-489a-bf6b-ff1c040c5fa0_elle.decor.jpg?auto=format&fit=max&q=60&w=670',
    title: 'Elle Decor',
    type: 'Announcement'
  },
  {
    id: 2,
    image: 'https://cdn.deringhall.com/images/2302/original/image.jpg?auto=format&fit=max&q=60&w=670',
    title: 'Architectural Digest',
    type: 'Announcement'
  },
  {
    id: 3,
    image: 'https://cdn.deringhall.com/images/718/original/cover.jpg?auto=format&fit=max&q=60&w=670',
    title: 'Shining Through',
    type: 'Press'
  },
  {
    id: 4,
    image: 'https://cdn.deringhall.com/images/681/original/cover.jpg?auto=format&fit=max&q=60&w=670',
    title: 'Remote Possibilities',
    type: 'Press'
  }
];

storiesOf('Seller Profile', module)
  .addDecorator(withTests(
    'SellerProfileHeader',
    'SellerProfileInfo',
    'SellerProfileMemberships',
    'SellerProfilePortfolios',
    'SellerProfileNews'
  ))
  .addWithJSX('default', () => (
    <SellerProfileTemplate>
      <SellerProfileHeader name={seller.name} website={seller.website} location={seller.location} />
      <SellerProfileInfo seller={seller} links={links} />
      <SellerProfileMemberships memberships={memberships} />
      <SellerProfilePortfolios portfolios={portfolios} />
      <SellerProfileNews news={news} />
    </SellerProfileTemplate>
  ));
