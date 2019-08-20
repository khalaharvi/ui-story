import React from 'react';
import { shallow } from 'enzyme';

import SellerHit from '../SellerHit';

describe('<SellerHit />', () => {
  it('renders correctly', () => {
    const hit = {
      name: 'Brand Name',
      primary_image_url: 'https://placehold.it/370x220',
      slug: '/brand-name',
      seller_types: ['interior-designer'],
      primary_type: 'interior-designer'
    };

    const wrapper = shallow(<SellerHit hit={hit} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with transformHitImageUrl', () => {
    const hit = {
      name: 'Brand Name',
      primary_image_url: 'https://placehold.it/370x220',
      slug: '/brand-name',
      seller_types: ['interior-designer'],
      primary_type: 'interior-designer'
    };

    const wrapper = shallow(
      <SellerHit
        hit={hit}
        transformHitImageUrl={url => url}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
